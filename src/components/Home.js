/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {BookList, NewBook, RemoveBook} from './Books';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <BookList />
      <NewBook />
    </div>
  );
};

export default Home;
