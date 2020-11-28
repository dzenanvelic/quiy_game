import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const{quiz, handleChange, handleSubmit,error}= useGlobalContext()
  return <main>
    <section className="quiz quiz-small">
      <form  className="setup-form"/>
      <h2>setup quiz</h2>
     {/*  amount */}
     <div className="form-control">
       <label htmlFor="amount">number of questions</label>
       <input
        type="number"
       name="amount"
       id="amount"
       value={quiz.amount}
        onChange={handleChange}
       className="form-input"
       min={1}
       max={50}
       />
     </div>
     {/* category */}
     <div className="form-control">
<label htmlFor="category">category</label>
<select name="category" id="category"className="form-input"value={quiz.category}
        onChange={handleChange}>
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
          <option value="geography">geography</option>
          <option value="film">film</option>
          <option value="celebrities">celebrities</option>
          <option value="animals">animals</option>
          <option value="vehicles">vehicles</option>
          <option value="art">art</option>
          <option value="music">music</option>
          <option value="science_gadgets">science_gadgets</option>
          <option value="comics">comics</option>
          <option value="science_computers">science_computers</option>
          <option value="science_mathematics">science_mathematics</option>
          <option value="entertainment_television">entertainment_television</option>
          <option value="entertainment_japanese_anime_and_manga">entertainment_japanese_anime_and_manga</option>
          <option value="science_and_nature">science_and_nature</option>
        </select>
     </div>
    {/*  difficulty */}
     <div className="form-control">
<label htmlFor="difficulty">difficulty</label>
<select name="difficulty" id="difficulty"className="form-input"value={quiz.difficulty}
        onChange={handleChange}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
     </div>
     {error && <p className="error">can't generate questions, please try different options</p>}
     <button type="submit"onClick={handleSubmit} className="submit-btn">start</button>
     
     
     <p>by Dzenan 2020</p>
    </section>
  </main>
}

export default SetupForm
