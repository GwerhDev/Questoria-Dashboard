import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchAdventures = createAsyncThunk(
  'adventures/fetchAdventures',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/adventure`, {
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

export const fetchAdventureById = createAsyncThunk(
  'adventures/fetchAdventureById',
  async (adventureId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/adventure/${adventureId}`, {
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

export const createAdventure = createAsyncThunk(
  'adventures/createAdventure',
  async ({ name, description }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/adventure`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create adventure');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchQuestsForAdventure = createAsyncThunk(
  'adventures/fetchQuestsForAdventure',
  async (adventureId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/adventure/${adventureId}/quest`, {
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

const adventureSlice = createSlice({
  name: 'adventures',
  initialState: {
    list: [],
    selectedAdventure: null,
    currentAdventureQuests: [], // New state for quests of the selected adventure
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdventures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdventures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchAdventures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchAdventureById.pending, (state) => {
        state.status = 'loading';
        state.selectedAdventure = null; // Clear previous adventure data
        state.currentAdventureQuests = []; // Clear quests when fetching new adventure
      })
      .addCase(fetchAdventureById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedAdventure = action.payload;
      })
      .addCase(fetchAdventureById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.selectedAdventure = null;
        state.currentAdventureQuests = [];
      })
      .addCase(fetchQuestsForAdventure.pending, (state) => {
        state.status = 'loading';
        state.currentAdventureQuests = [];
      })
      .addCase(fetchQuestsForAdventure.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentAdventureQuests = action.payload;
      })
      .addCase(fetchQuestsForAdventure.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.currentAdventureQuests = [];
      });
  },
});

export default adventureSlice.reducer;