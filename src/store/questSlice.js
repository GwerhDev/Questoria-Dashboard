import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = import.meta.env.VITE_API_BASE;

export const createQuest = createAsyncThunk(
  'quests/createQuest',
  async (questData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/quest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(questData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create quest');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchQuestById = createAsyncThunk(
  'quests/fetchQuestById',
  async (questId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/quest/${questId}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const questSlice = createSlice({
  name: 'quests',
  initialState: {
    selectedQuest: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuest.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createQuest.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createQuest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchQuestById.pending, (state) => {
        state.status = 'loading';
        state.selectedQuest = null;
      })
      .addCase(fetchQuestById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedQuest = action.payload;
      })
      .addCase(fetchQuestById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.selectedQuest = null;
      });
  },
});

export default questSlice.reducer;