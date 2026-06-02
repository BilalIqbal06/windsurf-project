// Linear Algebra Study Guide Data - Final Exam Preparation
// Based on Poole Linear Algebra textbook
// Concept-focused with subcategories and examples

export interface Equation {
  id: string;
  title: string;
  latex: string;
  description: string;
  category: string;
  section: string;
  example?: string;
  notes?: string;
}

export interface Theorem {
  id: string;
  name: string;
  statement: string;
  category: string;
  section: string;
  importance: 'fundamental' | 'important' | 'useful';
  proof?: string;
}

export interface PracticeProblem {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'calculation';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  section: string;
  source: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  section: string;
  mastered: boolean;
}

export interface ConceptExample {
  title: string;
  problem: string;
  solution: string;
  explanation: string;
}

export interface Concept {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  section: string;
  explanation: string;
  keyPoints: string[];
  examples: ConceptExample[];
  relatedConcepts: string[];
  importance: 'fundamental' | 'important' | 'useful';
}

export interface ExamInfo {
  date: string;
  time: string;
  location: string;
  duration: string;
  part1: {
    name: string;
    duration: string;
    format: string;
    coverage: string[];
    points: number;
  };
  part2: {
    name: string;
    duration: string;
    format: string;
    coverage: string[];
    points: number;
  };
}

// EXAM INFORMATION
export const examInfo: ExamInfo = {
  date: 'Monday, May 11, 2026',
  time: '19:00-21:00',
  location: 'To be announced',
  duration: '120 minutes',
  part1: {
    name: 'Common Time Exam (CTE)',
    duration: '60 minutes',
    format: 'Multiple choice only',
    coverage: ['All chapters (1-5 and Section 7.3)', 'Conceptual focus'],
    points: 400
  },
  part2: {
    name: 'Short Answer Problems',
    duration: '60 minutes',
    format: 'Short answer problems only',
    coverage: ['Sections 5.1, 5.2, 5.3', 'Section 7.3'],
    points: 400
  }
};

// CATEGORIES - Organized by Exam Structure
export const categories = [
  'Midterm 1 (Ch 1, 2, 3)',
  'Midterm 2 (Ch 3)',
  'Midterm 3 (Ch 4, Appendix C)',
  'Part 2 (Ch 5, 7.3)',
  'All Topics'
];

// SUBCATEGORIES - For organizing concepts
export const subcategories = [
  'Matrix Operations',
  'Systems of Linear Equations',
  'Vector Spaces',
  'Linear Independence',
  'Bases and Dimension',
  'Linear Transformations',
  'Matrix Inverses',
  'Determinants',
  'Eigenvalues and Eigenvectors',
  'Diagonalization',
  'Inner Products',
  'Orthogonality',
  'Projections',
  'Gram-Schmidt',
  'Least Squares'
];

// CONCEPTS - Comprehensive concept coverage with subcategories and examples
export const concepts: Concept[] = [
  // MIDTERM 1 - Chapter 1, 2, 3
  {
    id: 'concept-1',
    name: 'Matrix Addition',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Matrix Operations',
    section: '1.1',
    explanation: '**Matrix addition** is performed **element-wise**. Two matrices can only be added if they have the **same dimensions** (same number of rows and columns). The sum of two matrices A and B is obtained by adding **corresponding entries**. **TRICK:** Always check dimensions first - if dimensions don\'t match, addition is undefined. **HINT:** Think of it like adding two spreadsheets cell-by-cell. **KEY WORDS:** element-wise, corresponding entries, same dimensions, commutative, associative.',
    keyPoints: [
      'Matrices must have the **same dimensions** to be added',
      'Addition is **commutative**: A + B = B + A',
      'Addition is **associative**: (A + B) + C = A + (B + C)',
      'The result has the **same dimensions** as the original matrices',
      'Zero matrix acts as additive identity: A + 0 = A',
      'Each entry (i,j) in sum = A[i,j] + B[i,j]'
    ],
    examples: [
      {
        title: 'Basic Matrix Addition',
        problem: 'Find $A + B$ where $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 6 \\\\\ 7 & 8 \\end{bmatrix}$',
        solution: '$A + B = \\begin{bmatrix} 1+5 & 2+6 \\\\\ 3+7 & 4+8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\\ 10 & 12 \\end{bmatrix}$',
        explanation: 'Add corresponding entries:\\top-left with\\top-left,\\top-right with\\top-right, bottom-left with bottom-left, bottom-right with bottom-right.'
      },
      {
        title: '3×3 Matrix Addition',
        problem: 'Find $A + B$ where $A = \\begin{bmatrix} 1 & 0 & 2 \\\\\ -1 & 3 & 4 \\\\\ 0 & 1 & -2 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 1 & 0 \\\\\ 1 & -3 & 1 \\\\\ -1 & 0 & 3 \\end{bmatrix}$',
        solution: '$A + B = \\begin{bmatrix} 1+2 & 0+1 & 2+0 \\\\\ -1+1 & 3+(-3) & 4+1 \\\\\ 0+(-1) & 1+0 & -2+3 \\end{bmatrix} = \\begin{bmatrix} 3 & 1 & 2 \\\\\ 0 & 0 & 5 \\\\\ -1 & 1 & 1 \\end{bmatrix}$',
        explanation: 'Each position is added independently. Note that 3+(-3)=0 in the middle.'
      }
    ],
    relatedConcepts: ['Matrix Scalar Multiplication', 'Matrix Multiplication'],
    importance: 'fundamental'
  },
  {
    id: 'concept-2',
    name: 'Scalar Multiplication',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Matrix Operations',
    section: '1.1',
    explanation: '**Scalar multiplication** multiplies **every entry** of a matrix by a **scalar** (a real number). If c is a scalar and A is a matrix, then cA is obtained by multiplying each entry of A by c. **TRICK:** Negative scalars flip signs of all entries. **HINT:** Think of scaling the matrix - making it bigger or smaller, or flipping it. **KEY WORDS:** scalar, multiply every entry, distributive, associative, zero matrix.',
    keyPoints: [
      'Multiply **every entry** by the scalar',
      '**Distributive** over addition: c(A + B) = cA + cB',
      '**Associative**: (cd)A = c(dA)',
      '1\\cdot A = A and 0\\cdot A = 0 (**zero matrix**)',
      '(-1)A = -A (negates all entries)',
      'cA has the **same dimensions** as A'
    ],
    examples: [
      {
        title: 'Basic Scalar Multiplication',
        problem: 'Find $2A$ where $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\end{bmatrix}$',
        solution: '$2A = \\begin{bmatrix} 2\\cdot1 & 2\\cdot2 \\\\\ 2\\cdot3 & 2\\cdot4 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\\ 6 & 8 \\end{bmatrix}$',
        explanation: 'Multiply each entry by the scalar 2'
      },
      {
        title: 'Negative Scalar Multiplication',
        problem: 'Find $-3A$ where $A = \\begin{bmatrix} 2 & -1 \\\\\ 0 & 4 \\end{bmatrix}$',
        solution: '$-3A = \\begin{bmatrix} -3\\cdot2 & -3\\cdot(-1) \\\\\ -3\\cdot0 & -3\\cdot4 \\end{bmatrix} = \\begin{bmatrix} -6 & 3 \\\\\ 0 & -12 \\end{bmatrix}$',
        explanation: 'Multiply each entry by -3. Note that -3×(-1) = 3 (negative times negative is positive).'
      }
    ],
    relatedConcepts: ['Matrix Addition', 'Matrix Multiplication'],
    importance: 'fundamental'
  },
  {
    id: 'concept-3',
    name: 'Matrix Transpose',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Matrix Operations',
    section: '1.1',
    explanation: 'The **transpose** of a matrix A, denoted A^T or A^⊤, is obtained by **swapping rows and columns**. The first row becomes the first column, the second row becomes the second column, and so on. **TRICK:** Imagine folding the matrix along its main diagonal. **HINT:** (i,j) position becomes (j,i) position. **KEY WORDS:** transpose, swap rows and columns, main diagonal, symmetric matrix, (A^T)_{ij} = A_{ji}.',
    keyPoints: [
      '**Swap rows with columns**: (A^T)_{ij} = A_{ji}',
      'The transpose of an m×n matrix is n×m',
      '(A^T)^T = A (**double transpose** returns original)',
      '(A + B)^T = A^T + B^T',
      '(cA)^T = cA^T',
      '(AB)^T = B^T A^T (**reverse order!**)',
      'A is symmetric if A^T = A'
    ],
    examples: [
      {
        title: 'Matrix Transpose',
        problem: 'Find $A^\top$ where $A = \\begin{bmatrix} 1 & 2 & 3 \\\\\ 4 & 5 & 6 \\end{bmatrix}$',
        solution: '$A^\top = \\begin{bmatrix} 1 & 4 \\\\\ 2 & 5 \\\\\ 3 & 6 \\end{bmatrix}$',
        explanation: 'Row 1 becomes column 1, Row 2 becomes column 2. The 2×3 matrix becomes 3×2.'
      },
      {
        title: 'Transpose of 3×3 Matrix',
        problem: 'Find $A^\top$ where $A = \\begin{bmatrix} 1 & 2 & 3 \\\\\ 4 & 5 & 6 \\\\\ 7 & 8 & 9 \\end{bmatrix}$',
        solution: '$A^\top = \\begin{bmatrix} 1 & 4 & 7 \\\\\ 2 & 5 & 8 \\\\\ 3 & 6 & 9 \\end{bmatrix}$',
        explanation: 'The main diagonal (1,5,9) stays the same. Off-diagonal entries swap positions across the diagonal.'
      }
    ],
    relatedConcepts: ['Matrix Operations', 'Symmetric Matrices'],
    importance: 'fundamental'
  },
  {
    id: 'concept-4',
    name: 'Matrix Multiplication',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Matrix Operations',
    section: '1.1',
    explanation: '**Matrix multiplication** is defined as follows: if A is m×n and B is n×p, then AB is m×p. The entry in row i, column j of AB is the **dot product** of row i of A and column j of B. **TRICK:** Check dimensions - inner dimensions must match (n = n). Result has outer dimensions (m×p). **HINT:** Think of it as "rows hit columns" - each entry is a row of A hitting a column of B. **KEY WORDS:** dot product, inner dimensions, outer dimensions, NOT commutative, associative, identity matrix.',
    keyPoints: [
      'Number of **columns of A** must equal number of **rows of B**',
      '**NOT commutative**: AB ≠ BA in general (order matters!)',
      '**Associative**: (AB)C = A(BC)',
      '**Distributive**: A(B + C) = AB + AC',
      'Identity matrix acts like 1: AI = IA = A',
      'Entry (i,j) = row i of A \\cdot column j of B',
      'If A is m×n and B is n×p, then AB is m×p'
    ],
    examples: [
      {
        title: '2×2 Matrix Multiplication',
        problem: 'Find $AB$ where $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 6 \\\\\ 7 & 8 \\end{bmatrix}$',
        solution: '$AB = \\begin{bmatrix} 1\\cdot5+2\\cdot7 & 1\\cdot6+2\\cdot8 \\\\\ 3\\cdot5+4\\cdot7 & 3\\cdot6+4\\cdot8 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\\ 43 & 50 \\end{bmatrix}$',
        explanation: 'Entry (1,1): dot product of row 1 of A and column 1 of B: 1\\cdot5 + 2\\cdot7 = 19. Each entry is calculated independently.'
      },
      {
        title: '3×2 times 2×3 Matrix Multiplication',
        problem: 'Find $AB$ where $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\\\\ 5 & 6 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 0 & 1 \\\\\ 0 & 1 & 0 \\end{bmatrix}$',
        solution: '$AB = \\begin{bmatrix} 1\\cdot1+2\\cdot0 & 1\\cdot0+2\\cdot1 & 1\\cdot1+2\\cdot0 \\\\\ 3\\cdot1+4\\cdot0 & 3\\cdot0+4\\cdot1 & 3\\cdot1+4\\cdot0 \\\\\ 5\\cdot1+6\\cdot0 & 5\\cdot0+6\\cdot1 & 5\\cdot1+6\\cdot0 \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 1 \\\\\ 3 & 4 & 3 \\\\\ 5 & 6 & 5 \\end{bmatrix}$',
        explanation: 'A is 3×2, B is 2×3, so AB is 3×3. The inner dimensions (2) match, so multiplication is defined.'
      }
    ],
    relatedConcepts: ['Matrix Addition', 'Matrix Inverses'],
    importance: 'fundamental'
  },
  {
    id: 'concept-5',
    name: 'Linear Combination',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Vector Spaces',
    section: '1.1',
    explanation: 'A **linear combination** of vectors v₁, v₂, ..., vₖ is an expression of the form c₁v₁ + c₂v₂ + ... + cₖvₖ where c₁, c₂, ..., cₖ are **scalars**. Every vector in the span of a set of vectors can be written as a linear combination. **TRICK:** To check if a vector is a linear combination, set up a system of equations. **HINT:** Think of it as "mixing" vectors with different amounts (scalars). **KEY WORDS:** linear combination, scalars, span, coefficients, system of equations.',
    keyPoints: [
      'Formed by **multiplying vectors by scalars** and adding',
      'The **span** of vectors is all possible linear combinations',
      'If a vector is a linear combination of others, the set is **linearly dependent**',
      'Used to define span and linear independence',
      'c₁v₁ + c₂v₂ + ... + cₖvₖ = target vector',
      'Solve for coefficients to express one vector as combination of others'
    ],
    examples: [
      {
        title: 'Linear Combination',
        problem: 'Express $\\begin{bmatrix} 5 \\\\\ 8 \\end{bmatrix}$ as a linear combination of $\\begin{bmatrix} 1 \\\\\ 2 \\end{bmatrix}$ and $\\begin{bmatrix} 3 \\\\\ 4 \\end{bmatrix}$',
        solution: '$2\\begin{bmatrix} 1 \\\\\ 2 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\\ 4 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\\ 8 \\end{bmatrix}$',
        explanation: 'Multiply first vector by 2, add to second vector (multiplied by 1). Coefficients are (2, 1).'
      },
      {
        title: 'Finding Coefficients',
        problem: 'Find scalars a and b such that $a\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 1 \\end{bmatrix} + b\\begin{bmatrix} 0 \\\\\ 1 \\\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\\ 3 \\\\\ 5 \\end{bmatrix}$',
        solution: 'From first component: a = 2. From second: b = 3. Check third: 2 + 3 = 5 ✓. Answer: a = 2, b = 3',
        explanation: 'Set up equations from each component: a\\cdot1 + b\\cdot0 = 2, a\\cdot0 + b\\cdot1 = 3, a\\cdot1 + b\\cdot1 = 5. Solve the system.'
      }
    ],
    relatedConcepts: ['Span', 'Linear Independence', 'Basis'],
    importance: 'fundamental'
  },
  {
    id: 'concept-6',
    name: 'Systems of Linear Equations',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Systems of Linear Equations',
    section: '2.1',
    explanation: 'A **system of linear equations** can be written in matrix form as **Ax = b**, where A is the **coefficient matrix**, x is the vector of unknowns, and b is the constant vector. Solutions exist when b is in the **column space** of A. **TRICK:** Write as augmented matrix [A|b] and use row reduction. **HINT:** Geometrically, each equation is a hyperplane; solutions are intersections. **KEY WORDS:** coefficient matrix, augmented matrix, consistent, inconsistent, unique solution, infinite solutions, column space.',
    keyPoints: [
      'Can be written as **augmented matrix** [A|b]',
      'Row operations preserve solution set',
      'Three possibilities: **no solution**, **unique solution**, **infinitely many solutions**',
      '**Consistent** if at least one solution exists',
      '**Inconsistent** if no solution exists',
      'Ax = b has solution iff b is in col(A)',
      'Unique solution when rank(A) = rank([A|b]) = number of variables'
    ],
    examples: [
      {
        title: 'System with Unique Solution',
        problem: 'Solve: $x + y = 3$, $2x - y = 0$',
        solution: 'Add equations: $3x = 3$, so $x = 1$. Then $y = 2$. Solution: $(1, 2)$',
        explanation: 'Two lines intersect at exactly one point. The system is consistent with a unique solution.'
      },
      {
        title: 'System in Matrix Form',
        problem: 'Write $2x - y + z = 5$, $x + y = 3$, $3z = 6$ in matrix form Ax = b',
        solution: '$A = \\begin{bmatrix} 2 & -1 & 1 \\\\\ 1 & 1 & 0 \\\\\ 0 & 0 & 3 \\end{bmatrix}$, $x = \\begin{bmatrix} x \\\\\ y \\\\\ z \\end{bmatrix}$, $b = \\begin{bmatrix} 5 \\\\\ 3 \\\\\ 6 \\end{bmatrix}$',
        explanation: 'Each row of A contains coefficients of one equation. The augmented matrix is [A|b].'
      }
    ],
    relatedConcepts: ['Row Reduction', 'Rank', 'Null Space'],
    importance: 'fundamental'
  },
  {
    id: 'concept-7',
    name: 'Row Reduction (Gaussian Elimination)',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Systems of Linear Equations',
    section: '2.2',
    explanation: '**Row reduction** transforms a matrix into **row echelon form (REF)** or **reduced row echelon form (RREF)** using **elementary row operations**. This process solves systems of linear equations and finds rank, null space, and other properties. **TRICK:** Work from top-left, eliminate entries below pivots first, then above for RREF. **HINT:** Think of it as "triangularizing" the matrix step by step. **KEY WORDS:** elementary row operations, REF, RREF, pivot positions, leading entry, zero rows, rank.',
    keyPoints: [
      '**Elementary row operations**: swap rows, multiply row by scalar, add multiple of one row to another',
      '**Row echelon form (REF)**: leading entries move right as you go down, zero rows at bottom',
      '**Reduced row echelon form (RREF)**: REF with leading entries = 1 and zeros above and below',
      'Number of non-zero rows = **rank** of matrix',
      'RREF is **unique** for any matrix',
      'Leading 1s are called **pivots**'
    ],
    examples: [
      {
        title: 'Row Reduction to REF',
        problem: 'Reduce $\\begin{bmatrix} 1 & 2 & 3 \\\\\ 4 & 5 & 6 \\end{bmatrix}$ to REF',
        solution: '$\\begin{bmatrix} 1 & 2 & 3 \\\\\ 0 & -3 & -6 \\end{bmatrix}$ (subtract 4×row1 from row2)',
        explanation: 'Use row operation R2 → R2 - 4R1 to eliminate the 4 in position (2,1). The leading entry in row 2 is now -3 at position (2,2).'
      },
      {
        title: 'Row Reduction to RREF',
        problem: 'Reduce $\\begin{bmatrix} 2 & 4 \\\\\ 1 & 3 \\end{bmatrix}$ to RREF',
        solution: 'Step 1: R1 → R1/2: $\\begin{bmatrix} 1 & 2 \\\\\ 1 & 3 \\end{bmatrix}$. Step 2: R2 → R2 - R1: $\\begin{bmatrix} 1 & 2 \\\\\ 0 & 1 \\end{bmatrix}$. Step 3: R1 → R1 - 2R2: $\\begin{bmatrix} 1 & 0 \\\\\ 0 & 1 \\end{bmatrix}$',
        explanation: 'First get leading 1 in row 1, eliminate below, then eliminate above to get identity matrix (RREF).'
      }
    ],
    relatedConcepts: ['Rank', 'Systems of Linear Equations', 'Pivot Positions'],
    importance: 'fundamental'
  },
  {
    id: 'concept-8',
    name: 'Rank of a Matrix',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Vector Spaces',
    section: '2.2',
    explanation: 'The **rank** of a matrix is the number of **linearly independent rows** (or columns). It equals the dimension of the row space and column space. Rank can be found by counting the number of non-zero rows in the row echelon form. **TRICK:** Count pivots in REF - that is the rank. **HINT:** Rank measures how much information the matrix contains. **KEY WORDS:** rank, pivot positions, linearly independent, row space, column space, full rank, rank-nullity theorem.',
    keyPoints: [
      'Rank = number of **pivot positions**',
      'Rank ≤ min(number of rows, number of columns)',
      'Rank(A) = Rank(A^T)',
      '**Full rank** means rank = min(m, n)',
      '**Rank-Nullity Theorem**: rank + nullity = n',
      'Rank = dim(row space) = dim(column space)'
    ],
    examples: [
      {
        title: 'Finding Rank',
        problem: 'Find rank of $\\begin{bmatrix} 1 & 2 & 3 \\\\\ 4 & 5 & 6 \\\\\ 7 & 8 & 9 \\end{bmatrix}$',
        solution: 'Row reduce to $\\begin{bmatrix} 1 & 2 & 3 \\\\\ 0 & -3 & -6 \\\\\ 0 & 0 & 0 \\end{bmatrix}$. Rank = 2',
        explanation: 'Two non-zero rows means rank = 2. The third row became zero because row3 = row1 + 2(row2-row1).'
      },
      {
        title: 'Rank of Full Rank Matrix',
        problem: 'Find rank of $\\begin{bmatrix} 1 & 0 & 0 \\\\\ 0 & 1 & 0 \\\\\ 0 & 0 & 1 \\end{bmatrix}$',
        solution: 'Rank = 3',
        explanation: 'This is the identity matrix. All three rows are linearly independent, so rank = 3 = min(3,3). This is a full rank matrix.'
      }
    ],
    relatedConcepts: ['Nullity', 'Row Space', 'Column Space', 'Rank-Nullity Theorem'],
    importance: 'fundamental'
  },
  {
    id: 'concept-9',
    name: 'Linear Independence',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Linear Independence',
    section: '2.3',
    explanation: 'Vectors v₁, v₂, ..., vₖ are **linearly independent** if the only solution to c₁v₁ + c₂v₂ + ... + cₖvₖ = 0 is c₁ = c₂ = ... = cₖ = 0. If there is a **non-trivial solution**, the vectors are linearly dependent. **TRICK:** Set up matrix with vectors as columns and check rank. If rank < number of vectors, they are dependent. **HINT:** Independent vectors point in different directions - none is redundant. **KEY WORDS:** linearly independent, linearly dependent, trivial solution, non-trivial solution, homogeneous system, rank test.',
    keyPoints: [
      'Independent: no vector can be written as combination of others',
      'Dependent: at least one vector is a combination of others',
      'In ℝⁿ, more than n vectors are always dependent',
      'Standard basis vectors are always independent',
      'Check by solving homogeneous system or finding rank',
      'If rank < number of vectors, they are dependent'
    ],
    examples: [
      {
        title: 'Linearly Independent',
        problem: 'Are $\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}$ and $\\begin{bmatrix} 0 \\\\\ 1 \\end{bmatrix}$ linearly independent?',
        solution: 'Yes - they are independent',
        explanation: 'Only solution to c₁[1,0] + c₂[0,1] = [0,0] is c₁ = c₂ = 0. No non-trivial solution exists.'
      },
      {
        title: 'Rank Test for Independence',
        problem: 'Are $\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix}$, $\\begin{bmatrix} 4 \\\\\ 5 \\\\\ 6 \\end{bmatrix}$, $\\begin{bmatrix} 7 \\\\\ 8 \\\\\ 9 \\end{bmatrix}$ linearly independent?',
        solution: 'Form matrix $\\begin{bmatrix} 1 & 4 & 7 \\\\\ 2 & 5 & 8 \\\\\ 3 & 6 & 9 \\end{bmatrix}$. Row reduce to find rank. Rank = 2 < 3 vectors, so dependent.',
        explanation: 'Since rank (2) is less than the number of vectors (3), at least one vector is a combination of the others.'
      }
    ],
    relatedConcepts: ['Linear Combination', 'Basis', 'Span'],
    importance: 'fundamental'
  },
  {
    id: 'concept-10',
    name: 'Span',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Vector Spaces',
    section: '2.3',
    explanation: 'The **span** of a set of vectors is the set of all **linear combinations** of those vectors. It is always a subspace. The span of {v₁, ..., vₖ} is denoted span{v₁, ..., vₖ} or Span(v₁, ..., vₖ). **TRICK:** Span is all vectors you can reach by combining the given vectors. **HINT:** Think of span as the space generated by the vectors. **KEY WORDS:** span, linear combinations, subspace, generating set, spanning set, entire space.',
    keyPoints: [
      'Span is the **smallest subspace** containing the vectors',
      'If vectors span ℝⁿ, any vector in ℝⁿ can be written as a combination',
      'Adding more vectors can only increase (or maintain) the span',
      'Removing a vector can decrease the span',
      'Span of empty set is {0}',
      'Span{v₁,...,vₖ} = {c₁v₁ + ... + cₖvₖ | cᵢ ∈ ℝ}'
    ],
    examples: [
      {
        title: 'Span in ℝ²',
        problem: 'What is span{$\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}$, $\\begin{bmatrix} 0 \\\\\ 1 \\end{bmatrix}$}?',
        solution: 'All of ℝ² (the entire plane)',
        explanation: 'Any vector [x, y] = x[1,0] + y[0,1], so every vector is in the span. These vectors form the standard basis.'
      },
      {
        title: 'Span of Dependent Vectors',
        problem: 'What is span{$\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix}$, $\\begin{bmatrix} 2 \\\\\ 4 \\\\\ 6 \\end{bmatrix}$}?',
        solution: 'All vectors of form $t\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix}$ (a line through origin)',
        explanation: 'The second vector is 2× the first, so it adds nothing new. The span is the same as span of just the first vector.'
      }
    ],
    relatedConcepts: ['Linear Combination', 'Basis', 'Linear Independence'],
    importance: 'fundamental'
  },
  {
    id: 'concept-11',
    name: 'Basis',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Bases and Dimension',
    section: '3.5',
    explanation: 'A **basis** of a subspace is a set of vectors that: (1) **spans** the subspace, and (2) is **linearly independent**. Every basis of a subspace has the same number of vectors - this number is the dimension. **TRICK:** A basis is the "minimal spanning set" or "maximal independent set". **HINT:** Think of basis as the most efficient set of vectors to describe a space. **KEY WORDS:** basis, spanning, linearly independent, dimension, minimal spanning set, maximal independent set, standard basis.',
    keyPoints: [
      'Basis vectors **span** the space and are **independent**',
      '**Dimension** = number of basis vectors',
      'Standard basis for ℝⁿ: e₁, e₂, ..., eₙ',
      'Any linearly independent set can be extended to a basis',
      'Any spanning set can be reduced to a basis',
      'Basis is unique in size but not in the vectors themselves'
    ],
    examples: [
      {
        title: 'Standard Basis',
        problem: 'Find a basis for ℝ²',
        solution: '{$\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}$, $\\begin{bmatrix} 0 \\\\\ 1 \\end{bmatrix}$} is the standard basis',
        explanation: 'These vectors span ℝ² and are linearly independent. Any vector [x,y] can be written as x[1,0] + y[0,1].'
      },
      {
        title: 'Basis for a Subspace',
        problem: 'Find a basis for the plane x + y + z = 0 in ℝ³',
        solution: '{$\\begin{bmatrix} 1 \\\\\ -1 \\\\\ 0 \\end{bmatrix}$, $\\begin{bmatrix} 1 \\\\\ 0 \\\\\ -1 \\end{bmatrix}$} is a basis',
        explanation: 'These vectors satisfy x+y+z=0 and are independent. Any vector in the plane can be written as a combination.'
      }
    ],
    relatedConcepts: ['Dimension', 'Linear Independence', 'Span'],
    importance: 'fundamental'
  },
  {
    id: 'concept-12',
    name: 'Dimension',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    subcategory: 'Bases and Dimension',
    section: '3.5',
    explanation: 'The **dimension** of a subspace is the number of vectors in any basis for that subspace. For ℝⁿ, the dimension is n. The dimension tells us the degrees of freedom or the minimum number of vectors needed to describe the space. **TRICK:** Count the number of free variables or pivots. **HINT:** Dimension is how many independent directions exist in the space. **KEY WORDS:** dimension, basis, degrees of freedom, rank, nullity, subspace dimension, whole space dimension.',
    keyPoints: [
      'Dimension = number of basis vectors (same for any basis)',
      'dim(ℝⁿ) = n',
      'dim(subspace) ≤ dim(whole space)',
      'dim(row space) = dim(column space) = rank',
      'dim(null space) = nullity',
      'Dimension is invariant (same for any basis)'
    ],
    examples: [
      {
        title: 'Dimension of Subspaces',
        problem: 'What is the dimension of the xy-plane in ℝ³?',
        solution: 'Dimension = 2',
        explanation: 'A basis is {[1,0,0], [0,1,0]}, which has 2 vectors. The xy-plane needs only x and y coordinates - z is always 0.'
      },
      {
        title: 'Dimension from Rank',
        problem: 'If A is 3×4 with rank 2, what is dim(col(A))?',
        solution: 'Dimension = 2',
        explanation: 'Dimension of column space equals rank. By rank-nullity, nullity = 4 - 2 = 2, so dim(null(A)) = 2.'
      }
    ],
    relatedConcepts: ['Basis', 'Rank', 'Nullity'],
    importance: 'fundamental'
  },
  // MIDTERM 2 - Chapter 3
  {
    id: 'concept-13',
    name: 'Matrix Inverse',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Matrix Inverses',
    section: '3.3',
    explanation: 'The **inverse** of a square matrix A, denoted A⁻¹, is a matrix such that AA⁻¹ = A⁻¹A = I (the **identity matrix**). Not all matrices have inverses - only **invertible** (non-singular) matrices do. **TRICK:** Check determinant first - if det(A) = 0, no inverse exists. **HINT:** Think of A⁻¹ as the undo operation for matrix multiplication. **KEY WORDS:** inverse, invertible, non-singular, identity matrix, determinant, singular matrix.',
    keyPoints: [
      'A is invertible iff **det(A) ≠ 0**',
      'A⁻¹ exists only for **square matrices**',
      '(A⁻¹)⁻¹ = A',
      '(AB)⁻¹ = B⁻¹A⁻¹ (**reverse order!**)',
      '(A^T)⁻¹ = (A⁻¹)^T',
      'If A is invertible, Ax = b has unique solution x = A⁻¹b',
      'Row reduce [A|I] to [I|A⁻¹] to find inverse'
    ],
    examples: [
      {
        title: '2×2 Inverse Formula',
        problem: 'Find $A^{-1}$ for $A = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\end{bmatrix}$',
        solution: '$A^{-1} = \\begin{bmatrix} \\frac{1}{2} & 0 \\\\\ 0 & \\frac{1}{3} \\end{bmatrix}$',
        explanation: 'For diagonal matrices, invert each diagonal entry. Check: AA⁻¹ = [[2,0],[0,3]]\\cdot[[1/2,0],[0,1/3]] = [[1,0],[0,1]] = I ✓'
      },
      {
        title: '2×2 General Inverse',
        problem: 'Find $A^{-1}$ when $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\end{bmatrix}$',
        solution: 'det = 1\\cdot4 - 2\\cdot3 = -2. $A^{-1} = \\frac{1}{-2}\\begin{bmatrix} 4 & -2 \\\\\ -3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & 1 \\\\\ 1.5 & -0.5 \\end{bmatrix}$',
        explanation: 'Swap diagonal (1↔4), change signs of off-diagonal, divide by determinant (-2)'
      }
    ],
    relatedConcepts: ['Determinants', 'Singular Matrices'],
    importance: 'fundamental'
  },
  {
    id: 'concept-14',
    name: 'Determinant',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Determinants',
    section: '3.3',
    explanation: 'The **determinant** is a scalar value computed from a square matrix. It provides important information about the matrix: det(A) = 0 iff A is not invertible. The determinant also relates to area/volume scaling and eigenvalues. **TRICK:** det = 0 means matrix is singular (no inverse). **HINT:** Think of determinant as the \\"scaling factor\\" for area (2D) or volume (3D). **KEY WORDS:** determinant, singular, invertible, scaling factor, eigenvalues, cofactor expansion, triangular matrix.',
    keyPoints: [
      'det(A) = 0 iff A is not invertible (**singular**)',
      'det(AB) = det(A)det(B)',
      'det(A^T) = det(A)',
      'det(cA) = cⁿ det(A) for n×n matrix',
      'det(A) = product of **eigenvalues**',
      'For triangular matrices: det = product of diagonal entries',
      '2×2 formula: det([[a,b],[c,d]]) = ad - bc'
    ],
    examples: [
      {
        title: '2×2 Determinant',
        problem: 'Find det($\\begin{bmatrix} 3 & 1 \\\\\ 4 & 2 \\end{bmatrix}$)',
        solution: '$\\det = 3\\cdot2 - 1\\cdot4 = 6 - 4 = 2$',
        explanation: 'For [[a,b],[c,d]], det = ad - bc. Since det ≠ 0, this matrix is invertible.'
      },
      {
        title: 'Singular Matrix',
        problem: 'Find det($\\begin{bmatrix} 2 & 4 \\\\\ 1 & 2 \\end{bmatrix}$)',
        solution: '$\\det = 2\\cdot2 - 4\\cdot1 = 4 - 4 = 0$',
        explanation: 'det = 0 means the matrix is singular (not invertible). The rows are linearly dependent (row 2 = 0.5 × row 1).'
      }
    ],
    relatedConcepts: ['Matrix Inverse', 'Eigenvalues'],
    importance: 'fundamental'
  },
  {
    id: 'concept-15',
    name: 'Null Space (Kernel)',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Vector Spaces',
    section: '3.5',
    explanation: 'The **null space** (or kernel) of a matrix A is the set of all vectors x such that Ax = 0. It is always a subspace. The dimension of the null space is called the **nullity**. **TRICK:** Solve Ax = 0 using row reduction to find null space. **HINT:** Null space represents all inputs that produce zero output. **KEY WORDS:** null space, kernel, nullity, homogeneous system, free variables, rank-nullity theorem.',
    keyPoints: [
      'Null space = {x | Ax = 0}',
      'Dimension of null space = **nullity**',
      '**Rank-Nullity Theorem**: rank + nullity = n',
      'Null space contains zero vector',
      'If nullity = 0, only solution is x = 0 (columns are independent)',
      'Number of free variables = nullity',
      'Basis for null space comes from free variables in RREF'
    ],
    examples: [
      {
        title: 'Finding Null Space',
        problem: 'Find null space of $A = \\begin{bmatrix} 1 & 2 \\\\\ 2 & 4 \\end{bmatrix}$',
        solution: 'Solve $\\begin{bmatrix} 1 & 2 \\\\\ 2 & 4 \\end{bmatrix}\\begin{bmatrix} x \\\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\\ 0 \\end{bmatrix}$',
        explanation: 'Equation: x + 2y = 0, so x = -2y. Null space = {$t\\begin{bmatrix} -2 \\\\\ 1 \\end{bmatrix}$ | t ∈ ℝ}. Nullity = 1.'
      },
      {
        title: 'Trivial Null Space',
        problem: 'Find null space of $A = \\begin{bmatrix} 1 & 0 \\\\\ 0 & 1 \\end{bmatrix}$',
        solution: 'Only solution is $\\begin{bmatrix} 0 \\\\\ 0 \\end{bmatrix}$',
        explanation: 'This is the identity matrix. Ax = 0 only when x = 0. Null space = {0}, nullity = 0. Columns are linearly independent.'
      }
    ],
    relatedConcepts: ['Rank', 'Column Space', 'Rank-Nullity Theorem'],
    importance: 'fundamental'
  },
  {
    id: 'concept-16',
    name: 'Column Space',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Vector Spaces',
    section: '3.5',
    explanation: 'The **column space** of a matrix A is the span of its column vectors. It consists of all vectors that can be written as Ax for some vector x. The dimension of the column space equals the rank of A. **TRICK:** Column space is all possible outputs of Ax. **HINT:** Think of column space as the range or image of the linear transformation. **KEY WORDS:** column space, range, image, rank, span of columns, Ax = b solvability.',
    keyPoints: [
      'Column space = span of columns of A',
      'Dimension = rank of A',
      'Column space is a subspace of ℝᵐ (for m×n matrix)',
      'Ax = b has solution iff b is in column space of A',
      'dim(col space) = dim(row space) = rank',
      'Pivot columns form a basis for column space',
      'Column space is orthogonal to null space of A^T'
    ],
    examples: [
      {
        title: 'Column Space',
        problem: 'Find column space of $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 4 \\end{bmatrix}$',
        solution: 'Columns are $\\begin{bmatrix} 1 \\\\\ 3 \\end{bmatrix}$ and $\\begin{bmatrix} 2 \\\\\ 4 \\end{bmatrix}$. Since they are independent, col(A) = ℝ²',
        explanation: 'Two independent vectors in ℝ² span the entire plane. Rank = 2, so column space is ℝ².'
      },
      {
        title: 'Column Space of Dependent Columns',
        problem: 'Find column space of $A = \\begin{bmatrix} 1 & 2 \\\\\ 1 & 2 \\end{bmatrix}$',
        solution: 'Columns are $\\begin{bmatrix} 1 \\\\\ 1 \\end{bmatrix}$ and $\\begin{bmatrix} 2 \\\\\ 2 \\end{bmatrix}$. Column 2 = 2×column 1, so col(A) = span{$\\begin{bmatrix} 1 \\\\\ 1 \\end{bmatrix}$}',
        explanation: 'Only one independent column, so column space is a line through origin. Rank = 1.'
      }
    ],
    relatedConcepts: ['Row Space', 'Null Space', 'Rank'],
    importance: 'fundamental'
  },
  {
    id: 'concept-17',
    name: 'Row Space',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Vector Spaces',
    section: '3.5',
    explanation: 'The **row space** of a matrix A is the span of its row vectors. It consists of all linear combinations of the rows. The dimension of the row space equals the rank of A. **TRICK:** Row space is preserved by row operations. **HINT:** Row space tells you the dimension of the row information. **KEY WORDS:** row space, span of rows, rank, row operations, fundamental theorem of linear algebra.',
    keyPoints: [
      'Row space = span of rows of A',
      'Dimension = rank of A',
      'Row space is a subspace of ℝⁿ (for m×n matrix)',
      'Row operations preserve the row space',
      'dim(row space) = dim(col space) = rank',
      'Non-zero rows in RREF form a basis for row space',
      'Row space is orthogonal to null space of A'
    ],
    examples: [
      {
        title: 'Row Space',
        problem: 'What is the row space of $A = \\begin{bmatrix} 1 & 2 \\\\\ 3 & 6 \\end{bmatrix}$?',
        solution: 'Span{$[1, 2]$} (a line through origin in ℝ²)',
        explanation: 'Row 2 = 3×Row 1, so they are dependent. Only one independent row. Rank = 1.'
      },
      {
        title: 'Row Space of Full Rank Matrix',
        problem: 'What is the row space of $A = \\begin{bmatrix} 1 & 0 \\\\\ 0 & 1 \\end{bmatrix}$?',
        solution: 'All of ℝ²',
        explanation: 'Rows [1,0] and [0,1] are independent and span ℝ². This is the identity matrix, so rank = 2.'
      }
    ],
    relatedConcepts: ['Column Space', 'Null Space', 'Rank'],
    importance: 'fundamental'
  },
  {
    id: 'concept-18',
    name: 'Rank-Nullity Theorem',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Bases and Dimension',
    section: '3.5',
    explanation: 'For an m×n matrix A, **rank(A) + nullity(A) = n**. This fundamental theorem relates the dimension of the column space (rank) to the dimension of the null space (nullity). **TRICK:** If you know rank, nullity = n - rank. **HINT:** This is the dimension accounting - total columns = rank + nullity. **KEY WORDS:** rank-nullity theorem, fundamental theorem of linear algebra, rank, nullity, dimension, homogeneous system.',
    keyPoints: [
      '**rank + nullity = n** (number of columns)',
      'rank = dimension of column space',
      'nullity = dimension of null space',
      'If rank = n, nullity = 0 (only trivial solution to Ax = 0)',
      'If rank < n, nullity > 0 (infinitely many solutions to Ax = 0)',
      'nullity = number of free variables in RREF',
      'Applies to linear transformations: dim(range) + dim(kernel) = dim(domain)'
    ],
    examples: [
      {
        title: 'Applying Rank-Nullity',
        problem: 'If A is 4×6 with rank 3, what is nullity?',
        solution: 'nullity = n - rank = 6 - 3 = 3',
        explanation: '6 columns, rank 3, so nullity = 3. There are 3 free variables.'
      },
      {
        title: 'Full Rank Matrix',
        problem: 'If A is 3×3 with rank 3, what is nullity?',
        solution: 'nullity = 3 - 3 = 0',
        explanation: 'Full rank square matrix has nullity 0. Ax = 0 has only trivial solution x = 0. Matrix is invertible.'
      }
    ],
    relatedConcepts: ['Rank', 'Nullity', 'Column Space', 'Null Space'],
    importance: 'fundamental'
  },
  {
    id: 'concept-19',
    name: 'Linear Transformations',
    category: 'Midterm 2 (Ch 3)',
    subcategory: 'Linear Transformations',
    section: '3.6',
    explanation: 'A **linear transformation** T: ℝⁿ → ℝᵐ satisfies T(u + v) = T(u) + T(v) and T(cu) = cT(u) for all vectors u, v and scalars c. Every linear transformation can be represented by a matrix. **TRICK:** Check linearity by testing additivity and homogeneity. **HINT:** Linear transformations preserve straight lines and the origin. **KEY WORDS:** linear transformation, additivity, homogeneity, standard matrix, composition, kernel, image.',
    keyPoints: [
      'T(u + v) = T(u) + T(v) (**additivity**)',
      'T(cu) = cT(u) (**homogeneity**)',
      'T(0) = 0 always',
      'Every linear transformation has a **standard matrix**',
      'Composition of linear transformations corresponds to **matrix multiplication**',
      'Standard matrix columns are T(e₁), T(e₂), ..., T(eₙ)',
      'Kernel of T = null space of matrix, Image = column space'
    ],
    examples: [
      {
        title: 'Standard Matrix',
        problem: 'Find standard matrix for T($\\begin{bmatrix} x \\\\\ y \\end{bmatrix}$) = $\\begin{bmatrix} 2x + y \\\\\ x - 3y \\end{bmatrix}$',
        solution: 'Standard matrix = $\\begin{bmatrix} 2 & 1 \\\\\ 1 & -3 \\end{bmatrix}$',
        explanation: 'Columns are T(e₁) and T(e₂): T([1,0]) = [2,1], T([0,1]) = [1,-3]'
      },
      {
        title: 'Checking Linearity',
        problem: 'Is T($\\begin{bmatrix} x \\\\\ y \\end{bmatrix}$) = $\\begin{bmatrix} x + 1 \\\\\ y \\end{bmatrix}$ linear?',
        solution: 'No - fails T(0) = 0 test',
        explanation: 'T([0,0]) = [1,0] ≠ [0,0], so not linear. Linear transformations must map origin to origin.'
      }
    ],
    relatedConcepts: ['Matrix Multiplication', 'Kernel', 'Image'],
    importance: 'fundamental'
  },
  // MIDTERM 3 - Chapter 4
  {
    id: 'concept-20',
    name: 'Eigenvalues',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    subcategory: 'Eigenvalues and Eigenvectors',
    section: '4.1',
    explanation: 'An **eigenvalue** λ of a square matrix A is a scalar such that there exists a non-zero vector v (called an eigenvector) with Av = λv. Eigenvalues are found by solving the characteristic equation det(A - λI) = 0. **TRICK:** For triangular matrices, eigenvalues are just the diagonal entries. **HINT:** Eigenvalues measure how much a transformation stretches or shrinks vectors in certain directions. **KEY WORDS:** eigenvalue, eigenvector, characteristic equation, det(A - λI), triangular matrix, algebraic multiplicity.',
    keyPoints: [
      'Eigenvalue λ satisfies Av = λv for some non-zero v',
      'Find eigenvalues by solving det(A - λI) = 0',
      'An n×n matrix has at most n eigenvalues',
      'Eigenvalues of triangular matrix are **diagonal entries**',
      'det(A) = product of eigenvalues',
      'trace(A) = sum of eigenvalues',
      'Algebraic multiplicity = multiplicity as root of characteristic equation'
    ],
    examples: [
      {
        title: 'Finding Eigenvalues',
        problem: 'Find eigenvalues of $\\begin{bmatrix} 2 & 1 \\\\\ 1 & 2 \\end{bmatrix}$',
        solution: 'det($\\begin{bmatrix} 2-\\lambda & 1 \\\\\ 1 & 2-\\lambda \\end{bmatrix}$) = (2-λ)² - 1 = 0, so λ = 1, 3',
        explanation: 'Solve characteristic equation (2-λ)² - 1 = λ² - 4λ + 3 = 0 to get eigenvalues 1 and 3.'
      },
      {
        title: 'Triangular Matrix Eigenvalues',
        problem: 'Find eigenvalues of $\\begin{bmatrix} 3 & 5 \\\\\ 0 & 2 \\end{bmatrix}$',
        solution: 'Eigenvalues are 3 and 2 (diagonal entries)',
        explanation: 'For triangular matrices, eigenvalues are always the diagonal entries. No need to solve characteristic equation!'
      }
    ],
    relatedConcepts: ['Eigenvectors', 'Characteristic Equation', 'Determinants'],
    importance: 'fundamental'
  },
  {
    id: 'concept-21',
    name: 'Eigenvectors',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    subcategory: 'Eigenvalues and Eigenvectors',
    section: '4.1',
    explanation: 'An **eigenvector** v of a matrix A corresponding to eigenvalue λ is a non-zero vector such that Av = λv. Eigenvectors are found by solving (A - λI)v = 0 for each eigenvalue λ. **TRICK:** For each eigenvalue λ, find null space of (A - λI). **HINT:** Eigenvectors point in directions that are only scaled (not rotated) by the transformation. **KEY WORDS:** eigenvector, eigenvalue, null space, (A - λI), eigenspace, geometric multiplicity, linearly independent.',
    keyPoints: [
      'Eigenvector v satisfies Av = λv (v ≠ 0)',
      'Find by solving (A - λI)v = 0 for each λ',
      'Eigenvectors for different eigenvalues are **linearly independent**',
      'Multiple eigenvectors can correspond to same eigenvalue',
      'Zero vector is never an eigenvector',
      'Set of all eigenvectors for λ (plus 0) = **eigenspace**',
      'Geometric multiplicity = dimension of eigenspace'
    ],
    examples: [
      {
        title: 'Finding Eigenvectors',
        problem: 'Find eigenvector for λ = 3 for $A = \\begin{bmatrix} 2 & 1 \\\\\ 1 & 2 \\end{bmatrix}$',
        solution: 'Solve (A - 3I)v = 0: $\\begin{bmatrix} -1 & 1 \\\\\ 1 & -1 \\end{bmatrix}\\begin{bmatrix} x \\\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\\ 0 \\end{bmatrix}$',
        explanation: '-x + y = 0, so x = y. Eigenvector: $\\begin{bmatrix} 1 \\\\\ 1 \\end{bmatrix}$ (or any multiple)',
      },
      {
        title: 'Multiple Eigenvectors for Same Eigenvalue',
        problem: 'Find eigenvectors for λ = 2 for $A = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 2 \\end{bmatrix}$',
        solution: 'Any non-zero vector is an eigenvector',
        explanation: 'A - 2I = 0 matrix, so (A - 2I)v = 0 for all v. Every non-zero vector is an eigenvector. This is a scalar matrix.'
      }
    ],
    relatedConcepts: ['Eigenvalues', 'Eigenspaces', 'Diagonalization'],
    importance: 'fundamental'
  },
  {
    id: 'concept-22',
    name: 'Characteristic Equation',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    subcategory: 'Eigenvalues and Eigenvectors',
    section: '4.1',
    explanation: 'The **characteristic equation** of a matrix A is det(A - λI) = 0. The solutions to this equation are the eigenvalues of A. For an n×n matrix, this is an n-th degree polynomial in λ. **TRICK:** For 2×2 matrix [[a,b],[c,d]], characteristic equation is λ² - (a+d)λ + (ad-bc) = 0. **HINT:** The characteristic polynomial encodes all eigenvalue information. **KEY WORDS:** characteristic equation, characteristic polynomial, det(A - λI), eigenvalues, trace, determinant, algebraic multiplicity.',
    keyPoints: [
      'Characteristic equation: det(A - λI) = 0',
      'Solutions are eigenvalues',
      'Degree = size of matrix (n for n×n)',
      'Coefficients relate to trace and determinant',
      'Complex eigenvalues come in conjugate pairs for real matrices',
      'For 2×2: λ² - (trace)λ + (det) = 0',
      'Algebraic multiplicity = multiplicity as root of characteristic equation'
    ],
    examples: [
      {
        title: 'Characteristic Equation',
        problem: 'Find characteristic equation of $\\begin{bmatrix} 2 & 1 \\\\\ 1 & 2 \\end{bmatrix}$',
        solution: 'det($\\begin{bmatrix} 2-\\lambda & 1 \\\\\ 1 & 2-\\lambda \\end{bmatrix}$) = (2-λ)² - 1 = λ² - 4λ + 3 = 0',
        explanation: 'Expand determinant to get quadratic in λ. Trace = 4, det = 3, so λ² - 4λ + 3 = 0.'
      },
      {
        title: 'Using Trace and Determinant',
        problem: 'Find characteristic equation of $\\begin{bmatrix} 3 & 2 \\\\\ 1 & 4 \\end{bmatrix}$',
        solution: 'trace = 3+4 = 7, det = 3\\cdot4 - 2\\cdot1 = 10, so λ² - 7λ + 10 = 0',
        explanation: 'Use formula λ² - (trace)λ + (det) = 0. Eigenvalues are λ = 2, 5.'
      }
    ],
    relatedConcepts: ['Eigenvalues', 'Determinants'],
    importance: 'important'
  },
  {
    id: 'concept-23',
    name: 'Eigenspaces',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    subcategory: 'Eigenvalues and Eigenvectors',
    section: '4.1',
    explanation: 'The **eigenspace** for eigenvalue λ is the set of all eigenvectors corresponding to λ, together with the zero vector. It is the null space of (A - λI) and is always a subspace. **TRICK:** Find eigenspace by computing null space of (A - λI). **HINT:** Eigenspace tells you all vectors that are scaled by λ. **KEY WORDS:** eigenspace, null space, geometric multiplicity, algebraic multiplicity, diagonalization, subspace.',
    keyPoints: [
      'Eigenspace E_λ = null space of (A - λI)',
      'Dimension of E_λ = **geometric multiplicity** of λ',
      'Geometric multiplicity ≤ algebraic multiplicity',
      'Matrix is diagonalizable iff geometric = algebraic for all eigenvalues',
      'Eigenspace always contains zero vector',
      'Basis of eigenspace = basis for null space of (A - λI)',
      'Eigenspaces for different eigenvalues are independent (intersection = {0})'
    ],
    examples: [
      {
        title: 'Finding Eigenspace',
        problem: 'Find eigenspace for λ = 1 for $\\begin{bmatrix} 2 & 1 \\\\\ 1 & 2 \\end{bmatrix}$',
        solution: 'Solve (A - I)v = 0: $\\begin{bmatrix} 1 & 1 \\\\\ 1 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\\ 0 \\end{bmatrix}$',
        explanation: 'x + y = 0, so y = -x. Eigenspace = {$t\\begin{bmatrix} 1 \\\\\ -1 \\end{bmatrix}$ | t ∈ ℝ}. Dimension = 1.'
      },
      {
        title: 'Eigenspace for Scalar Matrix',
        problem: 'Find eigenspace for λ = 2 for $\\begin{bmatrix} 2 & 0 \\\\\ 0 & 2 \\end{bmatrix}$',
        solution: 'Eigenspace = all of ℝ²',
        explanation: 'A - 2I = 0 matrix, so null space is ℝ². Geometric multiplicity = 2 = algebraic multiplicity.'
      }
    ],
    relatedConcepts: ['Eigenvalues', 'Eigenvectors', 'Diagonalization'],
    importance: 'important'
  },
  {
    id: 'concept-24',
        name: 'Diagonalization',
        category: 'Midterm 3 (Ch 4, Appendix C)',
        subcategory: 'Diagonalization',
        section: '4.4',
        explanation: 'A matrix A is **diagonalizable** if it can be written as A = PDP⁻¹ where D is a diagonal matrix and P is invertible. This happens when A has n linearly independent eigenvectors (for n×n matrix). **TRICK:** Check if geometric multiplicity equals algebraic multiplicity for each eigenvalue. **HINT:** Diagonalization simplifies matrix powers and computations. **KEY WORDS:** diagonalization, PDP⁻¹, eigenvalues, eigenvectors, geometric multiplicity, algebraic multiplicity, distinct eigenvalues.',
        keyPoints: [
          'A = PDP⁻¹ where D has eigenvalues on diagonal',
          'Columns of P are eigenvectors',
          'A is diagonalizable iff it has n linearly independent eigenvectors',
          'Sufficient condition: n distinct eigenvalues',
          'Necessary and sufficient: geometric multiplicity = algebraic multiplicity for all eigenvalues',
          'A^k = PD^kP⁻¹ (easy for computing powers)',
          'Not all matrices are diagonalizable (defective matrices)'
        ],
        examples: [
          {
            title: 'Diagonalization',
            problem: 'Diagonalize $A = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\end{bmatrix}$',
            solution: 'Already diagonal: P = I, D = A',
            explanation: 'Diagonal matrices are trivially diagonalizable. P = I (identity), D = A.'
          },
          {
            title: 'Diagonalizing a 2×2 Matrix',
            problem: 'Diagonalize $A = \\begin{bmatrix} 2 & 1 \\\\\ 1 & 2 \\end{bmatrix}$',
            solution: 'Eigenvalues: λ = 1, 3. Eigenvectors: [1,-1] for λ=1, [1,1] for λ=3. P = $\\begin{bmatrix} 1 & 1 \\\\\ -1 & 1 \\end{bmatrix}$, D = $\\begin{bmatrix} 1 & 0 \\\\\ 0 & 3 \\end{bmatrix}$',
            explanation: 'Columns of P are eigenvectors, D has eigenvalues on diagonal. Check: A = PDP⁻¹.'
          }
        ],
        relatedConcepts: ['Eigenvalues', 'Eigenvectors', 'Matrix Powers'],
        importance: 'fundamental'
  },
  // PART 2 - Chapter 5, 7.3
  {
    id: 'concept-25',
    name: 'Dot Product (Inner Product)',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Inner Products',
    section: '5.1',
    explanation: 'The **dot product** of vectors u and v in ℝⁿ is u \\cdot v = u₁v₁ + u₂v₂ + ... + uₙvₙ. It measures the alignment of vectors and is used to compute lengths, angles, and projections. **TRICK:** u \\cdot v = 0 means vectors are orthogonal (perpendicular). **HINT:** Think of dot product as measuring how much two vectors point in the same direction. **KEY WORDS:** dot product, inner product, orthogonal, perpendicular, norm, Cauchy-Schwarz, angle between vectors.',
    keyPoints: [
      'u \\cdot v = sum of products of corresponding components',
      'u \\cdot v = 0 iff u and v are **orthogonal** (perpendicular)',
      'u \\cdot u = ||u||² (norm squared)',
      'Cauchy-Schwarz: |u \\cdot v| ≤ ||u|| ||v||',
      'u \\cdot v = ||u|| ||v|| cos(θ) where θ is angle between vectors',
      'Commutative: u \\cdot v = v \\cdot u',
      'Distributive: u \\cdot (v + w) = u \\cdot v + u \\cdot w'
    ],
    examples: [
      {
        title: 'Dot Product',
        problem: 'Compute $\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\\ 5 \\\\\ 6 \\end{bmatrix}$',
        solution: '$1\\cdot4 + 2\\cdot5 + 3\\cdot6 = 4 + 10 + 18 = 32$',
        explanation: 'Multiply corresponding components and sum'
      },
      {
        title: 'Orthogonality Check',
        problem: 'Are $\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}$ and $\\begin{bmatrix} 0 \\\\\ 1 \\end{bmatrix}$ orthogonal?',
        solution: 'Yes - dot product = 1\\cdot0 + 0\\cdot1 = 0',
        explanation: 'Dot product of zero means vectors are perpendicular'
      }
    ],
    relatedConcepts: ['Norm', 'Orthogonality', 'Projections'],
    importance: 'fundamental'
  },
  {
    id: 'concept-26',
    name: 'Norm (Length)',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Inner Products',
    section: '5.1',
    explanation: 'The **norm** (or length) of a vector v is ||v|| = √(v \\cdot v). It represents the distance from the origin to the point represented by the vector. The unit vector in the direction of v is v/||v||. **TRICK:** Use Pythagorean theorem - norm is the hypotenuse. **HINT:** Norm measures how long the vector is. **KEY WORDS:** norm, length, magnitude, unit vector, normalization, triangle inequality, distance.',
    keyPoints: [
      '||v|| = √(v₁² + v₂² + ... + vₙ²)',
      '||v|| ≥ 0, with equality only for v = 0',
      '||cv|| = |c| ||v|| for scalar c',
      'Triangle inequality: ||u + v|| ≤ ||u|| + ||v||',
      'Unit vector: v/||v|| (has norm 1)',
      '||v||² = v \\cdot v (norm squared equals dot product with itself)'
    ],
    examples: [
      {
        title: 'Computing Norm',
        problem: 'Find ||$\\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$||',
        solution: '$\\\sqrt{3^2 + 4^2} = \\\sqrt{9 + 16} = \\\sqrt{25} = 5$',
        explanation: 'Square each component, sum, take square root. This is the 3-4-5 right triangle.'
      },
      {
        title: 'Unit Vector',
        problem: 'Find unit vector in direction of $\\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$',
        solution: '$\\frac{1}{5}\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\\ 0.8 \\\\\end{bmatrix}$',
        explanation: 'Divide vector by its norm (5). The result has length 1.'
      }
    ],
    relatedConcepts: ['Dot Product', 'Distance', 'Unit Vectors'],
    importance: 'fundamental'
  },
  {
    id: 'concept-27',
    name: 'Distance Between Vectors',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Inner Products',
    section: '5.1',
    explanation: 'The **distance** between vectors u and v is d(u, v) = ||u - v||. It represents the length of the vector from the tip of v to the tip of u when both are placed at the origin. **TRICK:** Distance is the norm of the difference. **HINT:** Distance measures how far apart two points/vectors are. **KEY WORDS:** distance, metric, norm, triangle inequality, metric space axioms.',
    keyPoints: [
      'd(u, v) = ||u - v||',
      'd(u, v) ≥ 0, with equality only if u = v',
      'd(u, v) = d(v, u) (**symmetric**)',
      'Triangle inequality: d(u, w) ≤ d(u, v) + d(v, w)',
      'Distance satisfies all metric space axioms',
      'd(u, v)² = (u - v) \\cdot (u - v)'
    ],
    examples: [
      {
        title: 'Distance',
        problem: 'Find distance between $\\\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 4 \\\ 6 \\\\\end{bmatrix}$',
        solution: '$||\\begin{bmatrix} 1-4 \\\ 2-6 \\\\\end{bmatrix}|| = ||\\begin{bmatrix} -3 \\\\\\\\-4 \\\\\end{bmatrix}|| = \\\sqrt{9 + 16} = 5$',
        explanation: 'Subtract vectors, then compute norm. This is another 3-4-5 triangle.'
      },
      {
        title: 'Distance in 3D',
        problem: 'Find distance between $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$',
        solution: '$||\\begin{bmatrix} 1 \\\\\\\\-1 \\\\\ 0 \\\\\end{bmatrix}|| = \\\sqrt{1 + 1 + 0} = \\\sqrt{2}$',
        explanation: 'Distance between unit vectors along x and y axes is √2.'
      }
    ],
    relatedConcepts: ['Norm', 'Dot Product'],
    importance: 'important'
  },
  {
    id: 'concept-28',
    name: 'Orthogonality',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Orthogonality',
    section: '5.1',
    explanation: 'Two vectors u and v are **orthogonal** if their dot product is zero: u \\cdot v = 0. Orthogonal vectors are perpendicular to each other. A set of vectors is orthogonal if every pair is orthogonal. **TRICK:** Check dot product = 0 to test orthogonality. **HINT:** Orthogonal vectors are at 90° angles to each other. **KEY WORDS:** orthogonal, perpendicular, dot product, orthogonal set, linearly independent, Pythagorean theorem.',
    keyPoints: [
      'u \\cdot v = 0 means u and v are orthogonal',
      'Orthogonal vectors are perpendicular (90° angle)',
      'Zero vector is orthogonal to every vector',
      'Standard basis vectors are mutually orthogonal',
      'Orthogonal set of non-zero vectors is linearly independent',
      'Pythagorean theorem: ||u + v||² = ||u||² + ||v||² for orthogonal u, v'
    ],
    examples: [
      {
        title: 'Checking Orthogonality',
        problem: 'Are $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}$ orthogonal?',
        solution: 'Yes - each pair has dot product 0',
        explanation: 'Standard basis vectors are mutually orthogonal'
      },
      {
        title: 'Non-Orthogonal Vectors',
        problem: 'Are $\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$ orthogonal?',
        solution: 'No - dot product = 1\\cdot1 + 1\\cdot0 + 0\\cdot0 = 1 ≠ 0',
        explanation: 'Dot product not zero, so vectors are not perpendicular.'
      }
    ],
    relatedConcepts: ['Dot Product', 'Orthonormal Basis', 'Orthogonal Complement'],
    importance: 'fundamental'
  },
  {
    id: 'concept-29',
    name: 'Orthogonal Projections',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Projections',
    section: '5.2',
    explanation: 'The **orthogonal projection** of vector v onto vector w is proj_w(v) = ((v \\cdot w)/(w \\cdot w))w. It gives the component of v in the direction of w. The projection is the closest point to v on the line spanned by w. **TRICK:** Use formula (v\\cdotw)/(w\\cdotw) times w. **HINT:** Projection shadows v onto the line through w. **KEY WORDS:** orthogonal projection, component, closest point, projection matrix, Gram-Schmidt.',
    keyPoints: [
      'proj_w(v) = ((v \\cdot w)/(w \\cdot w))w',
      'Projection is parallel to w',
      'v - proj_w(v) is orthogonal to w',
      'Key for Gram-Schmidt process',
      'Projection matrix: P = (ww^T)/(w^Tw)',
      'proj_w(v) is the closest point to v on span{w}'
    ],
    examples: [
      {
        title: 'Projection',
        problem: 'Find proj of $\\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$ onto $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix}$',
        solution: '$\\frac{3}{1}\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix} = \\begin{bmatrix} 3 \\\\\ 0 \\\\\end{bmatrix}$',
        explanation: 'Dot product is 3, w\\cdotw = 1, so projection is 3w'
      },
      {
        title: 'Projection onto Diagonal',
        problem: 'Find proj of $\\\begin{bmatrix} 1 \\\ 2 \\\ 3 \\\\\end{bmatrix}$ onto $\\\begin{bmatrix} 1 \\\ 1 \\\ 1 \\\\\end{bmatrix}$',
        solution: 'v\\cdotw = 6, w\\cdotw = 3, so proj = (6/3)$\\\begin{bmatrix} 1 \\\ 1 \\\ 1 \\\\\end{bmatrix}$ = $\\\begin{bmatrix} 2 \\\ 2 \\\ 2 \\\\\end{bmatrix}$',
        explanation: 'Project onto the line x=y=z. The result [2,2,2] lies on this line.'
      }
    ],
    relatedConcepts: ['Dot Product', 'Gram-Schmidt', 'Least Squares'],
    importance: 'fundamental'
  },
  {
    id: 'concept-30',
    name: 'Gram-Schmidt Process',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Gram-Schmidt',
    section: '5.2',
    explanation: 'The **Gram-Schmidt process** converts a set of linearly independent vectors into an orthogonal (or orthonormal) basis. It works by repeatedly subtracting projections onto previous vectors. **TRICK:** u₁ = v₁, then u_k = v_k - sum of projections onto previous u_i. **HINT:** Think of it as removing components in directions already covered. **KEY WORDS:** Gram-Schmidt, orthogonal basis, orthonormal basis, projection, QR decomposition, orthogonalization.',
    keyPoints: [
      'u₁ = v₁ (first vector stays or normalize)',
      'u_k = v_k - Σ proj_{u_i}(v_k) for i = 1 to k-1',
      'Produces orthogonal basis from any basis',
      'Can normalize to get orthonormal basis',
      'Essential for QR decomposition and orthogonal projections',
      'Preserves the span of the original vectors'
    ],
    examples: [
      {
        title: 'Gram-Schmidt',
        problem: 'Apply Gram-Schmidt to {$\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 1 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}$}',
        solution: 'u₁ = $\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, u₂ = v₂ - proj_{u₁}(v₂)',
        explanation: 'Subtract projection of second vector onto first to make them orthogonal'
      },
      {
        title: 'Gram-Schmidt in 2D',
        problem: 'Apply Gram-Schmidt to {$\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 1 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\ 1 \\\ 1 \\\\\end{bmatrix}$}',
        solution: 'u₁ = [1,1,0], u₂ = [1,-1,2]/2, u₃ = [-1,1,0]/√2 (after normalization)',
        explanation: 'Each step removes components in directions of previous vectors. Result is orthogonal basis.'
      }
    ],
    relatedConcepts: ['Orthogonal Projections', 'Orthonormal Basis', 'QR Decomposition'],
    importance: 'fundamental'
  },
  {
    id: 'concept-31',
    name: 'Orthogonal Complement',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Orthogonality',
    section: '5.3',
    explanation: 'The **orthogonal complement** W^⊥ of a subspace W consists of all vectors orthogonal to every vector in W. For a matrix A, (row space)^⊥ = null space and (column space)^⊥ = null space of A^T. **TRICK:** dim(W) + dim(W^⊥) = n. **HINT:** W^⊥ contains everything perpendicular to W. **KEY WORDS:** orthogonal complement, null space, row space, column space, dimension, fundamental subspaces.',
    keyPoints: [
      'W^⊥ = {v | v \\cdot w = 0 for all w ∈ W}',
      'dim(W) + dim(W^⊥) = n (for subspace of ℝⁿ)',
      '(W^⊥)^⊥ = W',
      'W ∩ W^⊥ = {0}',
      'For matrix A: (col A)^⊥ = null(A^T)',
      'For matrix A: (row A)^⊥ = null(A)'
    ],
    examples: [
      {
        title: 'Orthogonal Complement',
        problem: 'Find W^⊥ for W = span{$\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$}',
        solution: 'W^⊥ = span{$\\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}$}',
        explanation: 'Vectors orthogonal to [1,0,0] have first component 0. dim(W)=1, dim(W^⊥)=2, 1+2=3 ✓'
      },
      {
        title: 'Orthogonal Complement of Plane',
        problem: 'Find W^⊥ for W = span{$\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\ 1 \\\ 1 \\\\\end{bmatrix}$}',
        solution: 'W^⊥ = span{$\\\begin{bmatrix} 1 \\\\\\\\-1 \\\ 1 \\\\\end{bmatrix}$}',
        explanation: 'Solve x+y=0 and y+z=0 to get x=-y, z=-y, so vector is [1,-1,1] (or multiples). dim(W)=2, dim(W^⊥)=1.'
      }
    ],
    relatedConcepts: ['Orthogonality', 'Null Space', 'Row Space', 'Column Space'],
    importance: 'fundamental'
  },
  {
    id: 'concept-32',
    name: 'Orthonormal Basis',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Orthogonality',
    section: '5.3',
    explanation: 'An **orthonormal basis** is a basis where all vectors are orthogonal to each other and each has norm 1. Orthonormal bases simplify many computations, especially projections and transformations. **TRICK:** Apply Gram-Schmidt, then normalize each vector. **HINT:** Orthonormal = orthogonal + normalized. **KEY WORDS:** orthonormal basis, orthogonal, normalized, Gram-Schmidt, projection matrix, orthogonal matrices.',
    keyPoints: [
      'Orthonormal: orthogonal AND each vector has norm 1',
      'Standard basis is orthonormal',
      'Any orthogonal basis can be normalized to orthonormal',
      'Projection onto orthonormal basis: sum of (v \\cdot u_i)u_i',
      'Coordinates in orthonormal basis: c_i = v \\cdot u_i'
    ],
    examples: [
      {
        title: 'Orthonormal Basis',
        problem: 'Is {$\\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 0 \\\ 1 \\\\\end{bmatrix}$} orthonormal?',
        solution: 'Yes - orthogonal and each has norm 1',
        explanation: 'Dot product = 0 (orthogonal), each vector has length 1 (normalized)'
      },
      {
        title: 'Normalizing to Orthonormal',
        problem: 'Convert {$\\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 1 \\\\\\\\-1 \\\\\ 0 \\\\\end{bmatrix}$} to orthonormal basis',
        solution: '{$\\frac{1}{\\\sqrt{2}}\\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$, $\\frac{1}{\\\sqrt{2}}\\begin{bmatrix} 1 \\\\\\\\-1 \\\\\ 0 \\\\\end{bmatrix}$}',
        explanation: 'Divide each vector by its norm (√2). Result is orthonormal.'
      }
    ],
    relatedConcepts: ['Orthogonality', 'Gram-Schmidt', 'Orthogonal Matrices'],
    importance: 'important'
  },
  {
    id: 'concept-33',
    name: 'Least Squares',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Least Squares',
    section: '7.3',
    explanation: '**Least squares** finds the best approximate solution to Ax = b when no exact solution exists. The least squares solution x̂ minimizes ||Ax - b|| and satisfies the normal equations A^TAx̂ = A^Tb. **TRICK:** Solve A^TAx̂ = A^Tb for the best approximation. **HINT:** Least squares projects b onto column space of A. **KEY WORDS:** least squares, normal equations, projection, column space, overdetermined system, approximation.',
    keyPoints: [
      'Used when Ax = b has no exact solution',
      'Normal equations: A^TAx̂ = A^Tb',
      'x̂ minimizes the error ||Ax - b||',
      'Projection of b onto col(A) is Ax̂',
      'Error = ||b - Ax̂|| (distance from b to column space)',
      'Essential for data fitting and regression'
    ],
    examples: [
      {
        title: 'Least Squares',
        problem: 'Solve least squares for Ax = b where A = $\\\begin{bmatrix} 1 & 1 \\\ 1 & -1 \\\\\end{bmatrix}$, b = $\\\begin{bmatrix} 3 \\\ 1 \\\\\end{bmatrix}$',
        solution: 'A^TA = $\\\begin{bmatrix} 2 & 0 \\\\\ 0 & 2 \\\\\end{bmatrix}$, A^Tb = $\\\begin{bmatrix} 4 \\\ 2 \\\\\end{bmatrix}$, so x̂ = $\\\begin{bmatrix} 2 \\\ 1 \\\\\end{bmatrix}$',
        explanation: 'Solve normal equations 2x = 4, 2y = 2 to get x̂ = [2, 1]'
      },
      {
        title: 'Least Squares for Line Fitting',
        problem: 'Find line y = mx + b fitting points (0,1), (1,2), (2,2)',
        solution: 'Form A = $\\\begin{bmatrix} 0 & 1 \\\ 1 & 1 \\\ 2 & 1 \\\\\end{bmatrix}$, b = $\\\begin{bmatrix} 1 \\\ 2 \\\ 2 \\\\\end{bmatrix}$, solve A^TAx̂ = A^Tb',
        explanation: 'Least squares finds best-fit line when points dont lie exactly on a line.'
      }
    ],
    relatedConcepts: ['Orthogonal Projections', 'Column Space', 'Normal Equations'],
    importance: 'fundamental'
  },
  {
    id: 'concept-34',
    name: 'Projection Matrix',
    category: 'Part 2 (Ch 5, 7.3)',
    subcategory: 'Least Squares',
    section: '7.3',
    explanation: 'The **projection matrix** P = A(A^TA)⁻¹A^T projects any vector onto the column space of A. For any vector b, Pb is the projection of b onto col(A). P is symmetric and idempotent (P² = P). **TRICK:** P = A(A^TA)⁻¹A^T projects onto col(A). **HINT:** Applying P twice is same as applying once (idempotent). **KEY WORDS:** projection matrix, column space, symmetric, idempotent, least squares, orthogonal projection.',
    keyPoints: [
      'P = A(A^TA)⁻¹A^T projects onto col(A)',
      'Pb = projection of b onto column space',
      'P is symmetric: P^T = P',
      'P is idempotent: P² = P',
      'Least squares solution: x̂ = (A^TA)⁻¹A^Tb',
      'For orthonormal columns: P = AA^T',
      'Range(P) = col(A), null(P) = (col A)^⊥'
    ],
    examples: [
      {
        title: 'Projection Matrix',
        problem: 'If A has orthonormal columns, what is the projection matrix?',
        solution: 'P = AA^T (since (A^TA)⁻¹ = I)',
        explanation: 'Simplifies when columns are orthonormal. No need to compute inverse.'
      },
      {
        title: 'Computing Projection Matrix',
        problem: 'Find projection matrix onto span{$\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$}',
        solution: 'A = $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$, P = $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$$\\\begin{bmatrix} 1 & 0 & 0 \\\\\end{bmatrix}$ = $\\\begin{bmatrix} 1 & 0 & 0 \\\\\ 0 & 0 & 0 \\\\\ 0 & 0 & 0 \\\\\end{bmatrix}$',
        explanation: 'Projects any vector onto the x-axis. P[x,y,z] = [x,0,0].'
      }
    ],
    relatedConcepts: ['Least Squares', 'Orthogonal Projections', 'Column Space'],
    importance: 'important'
  }
];

// EQUATIONS - Organized by Section
export const equations: Equation[] = [
  // Midterm 1 - Chapter 1, 2, 3
  {
    id: 'eq-1',
    title: 'Matrix Addition',
    latex: '(A + B)_{ij} = a_{ij} + b_{ij}',
    description: 'Addition of two matrices of the same dimension is performed element-wise.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    example: 'If A = \\begin{bmatrix} 1 & 2 \\\ 3 & 4 \\\\\end{bmatrix} and B = \\begin{bmatrix} 5 & 6 \\\ 7 & 8 \\\\\end{bmatrix}, then A+B = \\begin{bmatrix} 6 & 8 \\\ 10 & 12 \\\\\end{bmatrix}',
    notes: 'Matrices must have the same dimensions to be added'
  },
  {
    id: 'eq-2',
    title: 'Scalar Multiplication',
    latex: '(cA)_{ij} = c \\cdot a_{ij}',
    description: 'Multiplying a matrix by a scalar multiplies each entry by that scalar.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    example: 'If A = \\begin{bmatrix} 1 & 2 \\\ 3 & 4 \\\\\end{bmatrix} and c = 2, then 2A = \\begin{bmatrix} 2 & 4 \\\ 6 & 8 \\\\\end{bmatrix}'
  },
  {
    id: 'eq-3',
    title: 'Matrix Transpose',
    latex: '(A^\top)_{ij} = a_{ji}',
    description: 'The transpose of a matrix swaps rows and columns.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    example: 'If A = \\begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\\\end{bmatrix}, then A^\top = \\begin{bmatrix} 1 & 4 \\\ 2 & 5 \\\ 3 & 6 \\\\\end{bmatrix}',
    notes: '(A^\top)^\top = A'
  },
  {
    id: 'eq-4',
    title: 'Matrix Multiplication',
    latex: '(AB)_{ij} = \\\sum_{k=1}^{n} a_{ik} b_{kj}',
    description: 'The entry in row i, column j of AB is the dot product of row i of A and column j of B.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    example: 'For 2×2 matrices: AB = \\begin{bmatrix} a_{11}b_{11}+a_{12}b_{21} & a_{11}b_{12}+a_{12}b_{22} \\\\\\\\a_{21}b_{11}+a_{22}b_{21} & a_{21}b_{12}+a_{22}b_{22} \\\\\end{bmatrix}',
    notes: 'Number of columns of A must equal number of rows of B'
  },
  {
    id: 'eq-5',
    title: 'Linear Combination',
    latex: '\\mathbf{y} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k',
    description: 'A linear combination of vectors is formed by multiplying each vector by a scalar and adding the results.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    example: 'If \\\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix} and \\\\mathbf{v}_2 = \\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}, then 2\\\\mathbf{v}_1 + 3\\\\mathbf{v}_2 = \\begin{bmatrix} 2 \\\ 6 \\\\\end{bmatrix} + \\begin{bmatrix} 9 \\\ 12 \\\\\end{bmatrix} = \\begin{bmatrix} 11 \\\ 18 \\\\\end{bmatrix}'
  },
  {
    id: 'eq-6',
    title: 'Rank-Nullity Theorem',
    latex: '\\\ operatorname{rank}(A) + \\\ operatorname{nullity}(A) = n',
    description: 'For an m×n matrix A, the rank plus nullity equals the number of columns.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    example: 'If A is 3×4 with rank 2, then nullity = 4 - 2 = 2',
    notes: 'Fundamental theorem of linear algebra'
  },
  // Midterm 2 - Chapter 3
  {
    id: 'eq-7',
    title: 'Matrix Inverse',
    latex: 'A^{-1}A = AA^{-1} = I',
    description: 'The inverse of a matrix A, when multiplied by A, gives the identity matrix.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    example: 'If A = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}, then A^{-1} = \\begin{bmatrix} \\frac{1}{2} & 0 \\\\\ 0 & \\frac{1}{3} \\\\\end{bmatrix}',
    notes: 'Only square matrices can have inverses, and not all do'
  },
  {
    id: 'eq-8',
    title: '2×2 Inverse Formula',
    latex: 'A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\\\\\-c & a \\\\\end{bmatrix}',
    description: 'Formula for the inverse of a 2×2 matrix.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    example: 'If A = \\begin{bmatrix} a & b \\\\\\\\c & d \\\\\end{bmatrix}, then A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\\\\\-c & a \\\\\end{bmatrix}',
    notes: 'Matrix is invertible iff \\\det(A) = ad-bc \\\ neq 0'
  },
  // Midterm 3 - Chapter 4
  {
    id: 'eq-9',
    title: 'Characteristic Equation',
    latex: '\\\det(A - \\\lambda I) = 0',
    description: 'The characteristic equation is used to find eigenvalues of a matrix.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    example: 'For A = \\begin{bmatrix} 2 & 1 \\\ 1 & 2 \\\\\end{bmatrix}, \\\det\\begin{bmatrix} 2-\\\lambda & 1 \\\ 1 & 2-\\\lambda \\\\\end{bmatrix} = (2-\\\lambda)^2 - 1 = 0',
    notes: 'Solutions to this equation are the eigenvalues'
  },
  {
    id: 'eq-10',
    title: 'Eigenvector Equation',
    latex: '(A - \\\lambda I)\\\\mathbf{v} = \\\\mathbf{0}',
    description: 'An eigenvector v corresponding to eigenvalue λ satisfies this equation.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    example: 'For \\\lambda = 3 and A = \\begin{bmatrix} 2 & 1 \\\ 1 & 2 \\\\\end{bmatrix}, solve (A-3I)\\\\mathbf{v} = \\\\mathbf{0} to find eigenvector'
  },
  {
    id: 'eq-11',
    title: '2×2 Determinant',
    latex: '\\\det(A) = ad - bc',
    description: 'The determinant of a 2×2 matrix [[a,b],[c,d]].',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    example: '\\det\\begin{bmatrix} 2 & 3 \\\\\ 4 & 5 \\end{bmatrix} = 2\\cdot5 - 3\\cdot4 = 10 - 12 = -2',
    notes: 'Matrix is invertible iff \\\det \\\ neq 0'
  },
  {
    id: 'eq-12',
    title: '3×3 Determinant (Cofactor Expansion)',
    latex: '\\\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}',
    description: 'Determinant of 3×3 matrix using cofactor expansion along first row.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    example: 'For A = \\begin{bmatrix} a & b & c \\\\\\\\d & e & f \\\\\\\\g & h & i \\\\\end{bmatrix}, \\\det = a(ei-fh) - b(di-fg) + c(dh-eg)',
    notes: 'Can expand along any row or column'
  },
  {
    id: 'eq-13',
    title: 'Diagonalization',
    latex: 'A = PDP^{-1}',
    description: 'If A is diagonalizable, it can be written as PDP^{-1} where D is diagonal and P contains eigenvectors.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    example: 'If A has n linearly independent eigenvectors, form P with them as columns',
    notes: 'D contains eigenvalues on diagonal in corresponding order'
  },
  {
    id: 'eq-14',
    title: 'Matrix Power via Diagonalization',
    latex: 'A^k = PD^kP^{-1}',
    description: 'To compute A^k, diagonalize A and raise D to the kth power.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    example: 'If A = PDP^{-1}, then A^k = PD^kP^{-1} where D^k has \\\lambda_i^k on diagonal',
    notes: 'Much easier than direct multiplication for large k'
  },
  // Part 2 - Chapter 5, 7.3
  {
    id: 'eq-15',
    title: 'Dot Product',
    latex: '\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n',
    description: 'The dot product of two vectors is the sum of the products of corresponding components.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    example: '\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\\ 5 \\\\\ 6 \\end{bmatrix} = 1\\cdot4 + 2\\cdot5 + 3\\cdot6 = 4 + 10 + 18 = 32',
    notes: 'Also equal to \\\ |\\\\mathbf{u}\\\ | \\\ |\\\\mathbf{v}\\\ | \\\ cos(\\\ theta)'
  },
  {
    id: 'eq-16',
    title: 'Vector Norm (Length)',
    latex: '\\\ |\\mathbf{v}\\\ | = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}',
    description: 'The length or norm of a vector is the square root of the dot product with itself.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    example: '\\\ |\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}\\\ | = \\\sqrt{9+16} = \\\sqrt{25} = 5',
    notes: 'Always non-negative, zero only for zero vector'
  },
  {
    id: 'eq-17',
    title: 'Unit Vector',
    latex: '\\\\mathbf{u} = \\frac{\\\\mathbf{v}}{\\\ |\\\\mathbf{v}\\\ |}',
    description: 'A unit vector in the direction of v is v divided by its norm.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    example: 'Unit vector in direction of \\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix} is \\begin{bmatrix} 3/5 \\\ 4/5 \\\\\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\\ 0.8 \\\\\end{bmatrix}'
  },
  {
    id: 'eq-18',
    title: 'Distance Between Vectors',
    latex: 'd(\\\\mathbf{u}, \\\\mathbf{v}) = \\\ |\\\\mathbf{u} - \\\\mathbf{v}\\\ |',
    description: 'The distance between two vectors is the norm of their difference.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    example: 'd(\\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}, \\begin{bmatrix} 4 \\\ 6 \\\\\end{bmatrix}) = \\\ |\\begin{bmatrix} -3 \\\\\\\\-4 \\\\\end{bmatrix}\\\ | = \\\sqrt{9+16} = 5'
  },
  {
    id: 'eq-19',
    title: 'Orthogonal Projection',
    latex: '\\\ operatorname{proj}_{\\mathbf{w}}(\\mathbf{v}) = \\frac{\\mathbf{v} \\cdot \\mathbf{w}}{\\mathbf{w} \\cdot \\mathbf{w}} \\mathbf{w}',
    description: 'The projection of v onto w gives the component of v in the direction of w.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    example: '\\\ operatorname{proj}_{\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix}}(\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}) = (3/1)\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix} = \\begin{bmatrix} 3 \\\\\ 0 \\\\\end{bmatrix}',
    notes: 'Key for Gram-Schmidt process'
  },
  {
    id: 'eq-20',
    title: 'Gram-Schmidt First Vector',
    latex: '\\\\mathbf{u}_1 = \\\\mathbf{v}_1',
    description: 'First step of Gram-Schmidt: keep the first vector as is (or normalize it).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    example: 'If \\\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}, then \\\\mathbf{u}_1 = \\\\mathbf{v}_1 (or normalize to \\begin{bmatrix} 1/\\\sqrt{2} \\\ 1/\\\sqrt{2} \\\\\ 0 \\\\\end{bmatrix})'
  },
  {
    id: 'eq-21',
    title: 'Gram-Schmidt Subsequent Vectors',
    latex: '\\\\mathbf{u}_k = \\\\mathbf{v}_k - \\\sum_{i=1}^{k-1} \\\ operatorname{proj}_{\\\\mathbf{u}_i}(\\\\mathbf{v}_k)',
    description: 'Subsequent Gram-Schmidt vectors are obtained by subtracting projections onto previous vectors.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    example: '\\\\mathbf{u}_2 = \\\\mathbf{v}_2 - \\\ operatorname{proj}_{\\\\mathbf{u}_1}(\\\\mathbf{v}_2), then normalize \\\\mathbf{u}_2',
    notes: 'Produces orthogonal basis from any basis'
  },
  {
    id: 'eq-22',
    title: 'Orthogonal Complement',
    latex: 'W^\\perp = \\\ {\\mathbf{v} \\in \\mathbb{R}^n : \\mathbf{v} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\\ }',
    description: 'The orthogonal complement of W consists of all vectors orthogonal to every vector in W.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.3',
    example: 'If W = \\\ operatorname{span}\\\ {\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}\\\ }, then W^\\\ perp = \\\ operatorname{span}\\\ {\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}, \\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}\\\ }',
    notes: '\\\ dim(W) + \\\ dim(W^\\\ perp) = n'
  },
  {
    id: 'eq-23',
    title: 'Least Squares Solution',
    latex: 'A^\top A\\\ hat{\\\\mathbf{x}} = A^\top \\\\mathbf{b}',
    description: 'The normal equations for finding the least squares solution to Ax = b.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    example: 'Solve A^\top A\\\ hat{\\\\mathbf{x}} = A^\top \\\\mathbf{b} to find \\\ hat{\\\\mathbf{x}} that minimizes \\\ |A\\\\mathbf{x} - \\\\mathbf{b}\\\ |',
    notes: 'Used when A\\\\mathbf{x} = \\\\mathbf{b} has no exact solution'
  },
  {
    id: 'eq-24',
    title: 'Least Squares Error',
    latex: 'E = \\\ |\\\\mathbf{b} - A\\\ hat{\\\\mathbf{x}}\\\ |',
    description: 'The error in the least squares approximation is the distance from b to the column space of A.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    example: 'Compute \\\ |\\\\mathbf{b} - A\\\ hat{\\\\mathbf{x}}\\\ | after finding least squares solution \\\ hat{\\\\mathbf{x}}',
    notes: 'Minimizes the sum of squared residuals'
  }
];

// THEOREMS - Organized by Section
export const theorems: Theorem[] = [
  // Midterm 1
  {
    id: 'thm-1',
    name: 'Properties of Matrix Operations',
    statement: 'For matrices A, B, C of appropriate dimensions and scalars c, d: (A+B)+C = A+(B+C), A+B = B+A, (AB)C = A(BC), A(B+C) = AB+AC, (B+C)A = BA+CA',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    importance: 'fundamental'
  },
  {
    id: 'thm-2',
    name: 'Transpose Properties',
    statement: '(A^T)^T = A, (A+B)^T = A^T + B^T, (cA)^T = cA^T, (AB)^T = B^T A^T',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    importance: 'important'
  },
  {
    id: 'thm-3',
    name: 'Row Echelon Form Uniqueness',
    statement: 'Every matrix can be reduced to a (unique) reduced row echelon form using elementary row operations.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.1',
    importance: 'fundamental'
  },
  {
    id: 'thm-4',
    name: 'Rank Theorem',
    statement: 'The rank of a matrix equals the number of pivot positions in its echelon form.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.2',
    importance: 'fundamental'
  },
  {
    id: 'thm-5',
    name: 'Linear Independence Test',
    statement: 'Vectors v₁, ..., vₙ are linearly independent iff the matrix [v₁ ... vₙ] has rank n (full column rank).',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.3',
    importance: 'fundamental'
  },
  // Midterm 2
  {
    id: 'thm-6',
    name: 'Invertible Matrix Theorem',
    statement: 'For an n×n matrix A, the following are equivalent: A is invertible, Ax=0 has only trivial solution, Ax=b has unique solution for every b, rank(A)=n, det(A)≠0, columns of A are linearly independent, columns span R^n, 0 is not an eigenvalue of A.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    importance: 'fundamental'
  },
  {
    id: 'thm-7',
    name: 'Inverse of Product',
    statement: '(AB)^{-1} = B^{-1}A^{-1} provided A and B are invertible.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    importance: 'important'
  },
  {
    id: 'thm-8',
    name: 'Basis Theorem',
    statement: 'Any two bases of a subspace have the same number of vectors. This number is the dimension.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    importance: 'fundamental'
  },
  {
    id: 'thm-9',
    name: 'Rank-Nullity Theorem',
    statement: 'For an m×n matrix A: rank(A) + nullity(A) = n, where nullity(A) = dim(N(A)).',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    importance: 'fundamental'
  },
  {
    id: 'thm-10',
    name: 'Standard Matrix of Linear Transformation',
    statement: 'If T: R^n → R^m is linear, then T(x) = Ax where A is the m×n matrix whose columns are T(e₁), ..., T(eₙ).',
    category: 'Midterm 2 (Ch 3)',
    section: '3.6',
    importance: 'fundamental'
  },
  // Midterm 3
  {
    id: 'thm-11',
    name: 'Eigenvalue-Eigenvector Relationship',
    statement: 'λ is an eigenvalue of A iff det(A - λI) = 0. The eigenvectors are the non-zero solutions to (A - λI)v = 0.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    importance: 'fundamental'
  },
  {
    id: 'thm-12',
    name: 'Eigenvalues of Triangular Matrix',
    statement: 'The eigenvalues of a triangular matrix are the entries on its main diagonal.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    importance: 'useful'
  },
  {
    id: 'thm-13',
    name: 'Determinant Properties',
    statement: 'det(A) = det(A^T), det(AB) = det(A)det(B), det(cA) = c^n det(A) for n×n A, det(A) = 0 iff A is not invertible.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    importance: 'fundamental'
  },
  {
    id: 'thm-14',
    name: 'Determinant and Eigenvalues',
    statement: 'det(A) = product of eigenvalues of A (counting multiplicities).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    importance: 'important'
  },
  {
    id: 'thm-15',
    name: 'Algebraic vs Geometric Multiplicity',
    statement: 'For each eigenvalue, algebraic multiplicity ≥ geometric multiplicity. A matrix is diagonalizable iff geometric multiplicity = algebraic multiplicity for all eigenvalues.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.3',
    importance: 'fundamental'
  },
  {
    id: 'thm-16',
    name: 'Diagonalization Criterion',
    statement: 'An n×n matrix A is diagonalizable iff it has n linearly independent eigenvectors (equivalently: the eigenvectors form a basis of R^n).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    importance: 'fundamental'
  },
  {
    id: 'thm-17',
    name: 'Similar Matrix Properties',
    statement: 'If A and B are similar (B = P^{-1}AP), then: det(A) = det(B), rank(A) = rank(B), trace(A) = trace(B), A and B have same eigenvalues with same multiplicities.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    importance: 'important'
  },
  // Part 2
  {
    id: 'thm-18',
    name: 'Cauchy-Schwarz Inequality',
    statement: '|u \\cdot v| ≤ ||u|| ||v|| for all vectors u, v. Equality holds iff u and v are scalar multiples.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    importance: 'fundamental'
  },
  {
    id: 'thm-19',
    name: 'Triangle Inequality',
    statement: '||u + v|| ≤ ||u|| + ||v|| for all vectors u, v.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    importance: 'important'
  },
  {
    id: 'thm-20',
    name: 'Pythagorean Theorem',
    statement: 'If u and v are orthogonal, then ||u + v||² = ||u||² + ||v||².',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    importance: 'useful'
  },
  {
    id: 'thm-21',
    name: 'Orthogonal Decomposition Theorem',
    statement: 'If W is a subspace of R^n and v ∈ R^n, then v can be uniquely written as v = w + w^⊥ where w ∈ W and w^⊥ ∈ W^⊥.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    importance: 'fundamental'
  },
  {
    id: 'thm-22',
    name: 'Gram-Schmidt Process',
    statement: 'Given any basis {v₁, ..., vₖ} of a subspace W, the Gram-Schmidt process produces an orthogonal basis {u₁, ..., uₖ} of the same subspace.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    importance: 'fundamental'
  },
  {
    id: 'thm-23',
    name: 'Orthogonal Complement Properties',
    statement: '(W^⊥)^⊥ = W, W ∩ W^⊥ = {0}, dim(W) + dim(W^⊥) = n, (row space of A)^⊥ = null space of A.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.3',
    importance: 'fundamental'
  },
  {
    id: 'thm-24',
    name: 'Fundamental Subspace Theorem',
    statement: 'For an m×n matrix A: col(A)^⊥ = null(A^T) and row(A)^⊥ = null(A).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.3',
    importance: 'important'
  },
  {
    id: 'thm-25',
    name: 'Least Squares Solution',
    statement: 'The least squares solutions to Ax = b are exactly the solutions to the normal equations A^TAx̂ = A^Tb.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    importance: 'fundamental'
  },
  {
    id: 'thm-26',
    name: 'Projection Matrix',
    statement: 'The matrix P = A(A^TA)^{-1}A^T projects vectors onto the column space of A. For any b, Pb is the projection of b onto col(A).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    importance: 'important'
  }
];

// PRACTICE PROBLEMS - Organized by Poole Sections
export const practiceProblems: PracticeProblem[] = [
  // Midterm 1 - Chapter 1, 2, 3
  {
    id: 'prob-1',
    question: 'If $A = \\begin{bmatrix} 1 & 2 \\\ 3 & 4 \\\\\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 6 \\\ 7 & 8 \\\\\end{bmatrix}$, what is $A + B$?',
    type: 'multiple-choice',
    options: [
      '$\\\begin{bmatrix} 6 & 8 \\\ 10 & 12 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 6 & 10 \\\ 8 & 12 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 5 & 7 \\\ 6 & 8 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 8 & 10 \\\ 12 & 14 \\\\\end{bmatrix}$'
    ],
    correctAnswer: '$\\\begin{bmatrix} 6 & 8 \\\ 10 & 12 \\\\\end{bmatrix}$',
    explanation: 'Matrix addition is element-wise: add corresponding entries. $A+B = \\begin{bmatrix} 1+5 & 2+6 \\\ 3+7 & 4+8 \\\\\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\ 10 & 12 \\\\\end{bmatrix}$',
    difficulty: 'easy',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    source: 'Poole 1.1: 7'
  },
  {
    id: 'prob-2',
    question: 'What is the transpose of $A = \\begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\\\end{bmatrix}$?',
    type: 'multiple-choice',
    options: [
      '$\\\begin{bmatrix} 1 & 4 \\\ 2 & 5 \\\ 3 & 6 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 3 & 2 & 1 \\\ 6 & 5 & 4 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 4 & 5 & 6 \\\ 1 & 2 & 3 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\\\end{bmatrix}$'
    ],
    correctAnswer: '$\\\begin{bmatrix} 1 & 4 \\\ 2 & 5 \\\ 3 & 6 \\\\\end{bmatrix}$',
    explanation: 'The transpose swaps rows and columns. Row 1 becomes column 1, row 2 becomes column 2.',
    difficulty: 'easy',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    source: 'Poole 1.1: 15'
  },
  {
    id: 'prob-3',
    question: 'If $\\\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}$ and $\\\\mathbf{v}_2 = \\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$, what is $2\\\\mathbf{v}_1 + \\\\mathbf{v}_2$?',
    type: 'calculation',
    correctAnswer: '$\\\begin{bmatrix} 5 \\\ 8 \\\\\end{bmatrix}$',
    explanation: '$2\\\\mathbf{v}_1 = \\begin{bmatrix} 2 \\\ 4 \\\\\end{bmatrix}$, then $2\\\\mathbf{v}_1 + \\\\mathbf{v}_2 = \\begin{bmatrix} 2+3 \\\ 4+4 \\\\\end{bmatrix} = \\begin{bmatrix} 5 \\\ 8 \\\\\end{bmatrix}$',
    difficulty: 'easy',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    source: 'Poole 1.1: 21'
  },
  {
    id: 'prob-4',
    question: 'The system $x + 2y = 3$, $2x + 4y = 6$ has how many solutions?',
    type: 'multiple-choice',
    options: ['Exactly one', 'Infinitely many', 'No solutions', 'Two solutions'],
    correctAnswer: 'Infinitely many',
    explanation: 'The second equation is 2 times the first, so they represent the same line. This gives infinitely many solutions.',
    difficulty: 'easy',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.1',
    source: 'Poole 2.1: 5'
  },
  {
    id: 'prob-5',
    question: 'What is the rank of the matrix $\\\begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\ 7 & 8 & 9 \\\\\end{bmatrix}$?',
    type: 'multiple-choice',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: 'Row reducing gives $\\\begin{bmatrix} 1 & 2 & 3 \\\\\ 0 & -3 & -6 \\\\\ 0 & 0 & 0 \\\\\end{bmatrix}$. There are 2 pivot positions, so rank = 2.',
    difficulty: 'medium',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.2',
    source: 'Poole 2.2: 25'
  },
  {
    id: 'prob-6',
    question: 'Are the vectors $\\\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 2 \\\ 4 \\\\\end{bmatrix}$, $\\\begin{bmatrix} 3 \\\ 6 \\\\\end{bmatrix}$ linearly independent?',
    type: 'multiple-choice',
    options: ['Yes', 'No', 'Cannot determine', 'Only the first two are'],
    correctAnswer: 'No',
    explanation: '$\\\begin{bmatrix} 2 \\\ 4 \\\\\end{bmatrix} = 2\\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 3 \\\ 6 \\\\\end{bmatrix} = 3\\begin{bmatrix} 1 \\\ 2 \\\\\end{bmatrix}$, so all are scalar multiples of each other. They are linearly dependent.',
    difficulty: 'easy',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.3',
    source: 'Poole 2.3: 17'
  },
  // Midterm 2 - Chapter 3
  {
    id: 'prob-7',
    question: 'What is the inverse of $A = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}$?',
    type: 'multiple-choice',
    options: [
      '$\\\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} \\frac{1}{2} & 0 \\\\\ 0 & \\frac{1}{3} \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 3 & 0 \\\\\ 0 & 2 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 0 & 2 \\\ 3 & 0 \\\\\end{bmatrix}$'
    ],
    correctAnswer: '$\\\begin{bmatrix} \\frac{1}{2} & 0 \\\\\ 0 & \\frac{1}{3} \\\\\end{bmatrix}$',
    explanation: 'For a diagonal matrix, the inverse is obtained by taking reciprocals of diagonal entries.',
    difficulty: 'easy',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    source: 'Poole 3.3: 1'
  },
  {
    id: 'prob-8',
    question: 'Is the matrix $\\\begin{bmatrix} 1 & 2 \\\ 2 & 4 \\\\\end{bmatrix}$ invertible?',
    type: 'multiple-choice',
    options: ['Yes', 'No', 'Only if determinant is zero', 'Cannot determine'],
    correctAnswer: 'No',
    explanation: '$\\det(A) = 1\\cdot4 - 2\\cdot2 = 0$. Since determinant is zero, the matrix is not invertible.',
    difficulty: 'easy',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    source: 'Poole 3.3: 16'
  },
  {
    id: 'prob-9',
    question: 'What is the dimension of the subspace spanned by $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}$ in $\\\ mathbb{R}^3$?',
    type: 'multiple-choice',
    options: ['1', '2', '3', '0'],
    correctAnswer: '2',
    explanation: 'The two vectors are linearly independent and span a 2-dimensional subspace (the xy-plane).',
    difficulty: 'easy',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    source: 'Poole 3.5: 1'
  },
  {
    id: 'prob-10',
    question: 'If $A$ is a 4×6 matrix with rank 3, what is the nullity of $A$?',
    type: 'calculation',
    correctAnswer: '3',
    explanation: 'By Rank-Nullity Theorem: $\\\ operatorname{rank}(A) + \\\ operatorname{nullity}(A) = n$ (number of columns). $3 + \\\ operatorname{nullity}(A) = 6$, so $\\\ operatorname{nullity}(A) = 3$.',
    difficulty: 'medium',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    source: 'Poole 3.5: 25'
  },
  {
    id: 'prob-11',
    question: 'If $T: \\\ mathbb{R}^2 \\\ to \\\ mathbb{R}^2$ is defined by $T(\\begin{bmatrix} x \\\\\\\\y \\\\\end{bmatrix}) = \\begin{bmatrix} 2x+y \\\\\\\\x-3y \\\\\end{bmatrix}$, what is the standard matrix of $T$?',
    type: 'multiple-choice',
    options: [
      '$\\\begin{bmatrix} 2 & 1 \\\ 1 & -3 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 2 & 0 \\\\\ 0 & -3 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 2 & 1 \\\\\\\\-3 & 1 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 1 & 2 \\\\\\\\-3 & 1 \\\\\end{bmatrix}$'
    ],
    correctAnswer: '$\\\begin{bmatrix} 2 & 1 \\\ 1 & -3 \\\\\end{bmatrix}$',
    explanation: 'The standard matrix has $T(\\\\mathbf{e}_1) = \\begin{bmatrix} 2 \\\ 1 \\\\\end{bmatrix}$ as first column and $T(\\\\mathbf{e}_2) = \\begin{bmatrix} 1 \\\\\\\\-3 \\\\\end{bmatrix}$ as second column.',
    difficulty: 'medium',
    category: 'Midterm 2 (Ch 3)',
    section: '3.6',
    source: 'Poole 3.6: 1'
  },
  // Midterm 3 - Chapter 4
  {
    id: 'prob-12',
    question: 'What are the eigenvalues of the matrix $\\\begin{bmatrix} 2 & 1 \\\ 1 & 2 \\\\\end{bmatrix}$?',
    type: 'multiple-choice',
    options: ['1 and 3', '2 and 2', '0 and 4', '-1 and 5'],
    correctAnswer: '1 and 3',
    explanation: '$\\\det\\begin{bmatrix} 2-\\\lambda & 1 \\\ 1 & 2-\\\lambda \\\\\end{bmatrix} = (2-\\\lambda)^2 - 1 = \\\lambda^2 - 4\\\lambda + 3 = (\\\lambda-1)(\\\lambda-3) = 0$, so $\\\lambda = 1, 3$.',
    difficulty: 'medium',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    source: 'Poole 4.1: 1'
  },
  {
    id: 'prob-13',
    question: 'What is the determinant of $\\\begin{bmatrix} 3 & 1 \\\ 4 & 2 \\\\\end{bmatrix}$?',
    type: 'calculation',
    correctAnswer: '2',
    explanation: '$\\det(A) = 3\\cdot2 - 1\\cdot4 = 6 - 4 = 2$',
    difficulty: 'easy',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    source: 'Poole 4.2: 1'
  },
  {
    id: 'prob-14',
    question: 'What is $\\\det\\begin{bmatrix} 1 & 0 & 0 \\\\\ 0 & 2 & 0 \\\\\ 0 & 0 & 3 \\\\\end{bmatrix}$?',
    type: 'multiple-choice',
    options: ['0', '1', '6', '5'],
    correctAnswer: '6',
    explanation: 'For a diagonal (or triangular) matrix, the determinant is the product of diagonal entries: $1\\cdot2\\cdot3 = 6$.',
    difficulty: 'easy',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    source: 'Poole 4.2: 26'
  },
  {
    id: 'prob-15',
    question: 'If $A$ has eigenvalues 2 and 3 with algebraic multiplicities both 1, what is $\\\det(A)$?',
    type: 'calculation',
    correctAnswer: '6',
    explanation: 'The determinant equals the product of eigenvalues: $\\det(A) = 2 \\cdot 3 = 6$.',
    difficulty: 'medium',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    source: 'Poole 4.2: 45'
  },
  {
    id: 'prob-16',
    question: 'Is the matrix $\\\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}$ diagonalizable?',
    type: 'multiple-choice',
    options: ['Yes', 'No', 'Only if 2=3', 'Cannot determine'],
    correctAnswer: 'Yes',
    explanation: 'It is already diagonal, so it is trivially diagonalizable with $P = I$ and $D = A$.',
    difficulty: 'easy',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    source: 'Poole 4.4: 1'
  },
  {
    id: 'prob-17',
    question: 'If $A = PDP^{-1}$ with $D = \\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}$, what is $A^2$?',
    type: 'multiple-choice',
    options: [
      '$P\\begin{bmatrix} 4 & 0 \\\\\ 0 & 9 \\\\\end{bmatrix}P^{-1}$',
      '$P\\begin{bmatrix} 2 & 0 \\\\\ 0 & 3 \\\\\end{bmatrix}P^{-1}$',
      '$\\\begin{bmatrix} 4 & 0 \\\\\ 0 & 9 \\\\\end{bmatrix}$',
      'Cannot determine'
    ],
    correctAnswer: '$P\\begin{bmatrix} 4 & 0 \\\\\ 0 & 9 \\\\\end{bmatrix}P^{-1}$',
    explanation: '$A^2 = (PDP^{-1})^2 = PD(P^{-1}P)DP^{-1} = PDIDP^{-1} = PD^2P^{-1}$, and $D^2$ has diagonal entries squared.',
    difficulty: 'hard',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    source: 'Poole 4.4: 42'
  },
  // Part 2 - Chapter 5, 7.3
  {
    id: 'prob-18',
    question: 'What is $\\begin{bmatrix} 1 \\\\\ 2 \\\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\\ 5 \\\\\ 6 \\end{bmatrix}$?',
    type: 'calculation',
    correctAnswer: '32',
    explanation: 'Dot product: $1\\cdot4 + 2\\cdot5 + 3\\cdot6 = 4 + 10 + 18 = 32$',
    difficulty: 'easy',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    source: 'Poole 5.1: 1'
  },
  {
    id: 'prob-19',
    question: 'What is the length (norm) of $\\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$?',
    type: 'calculation',
    correctAnswer: '5',
    explanation: '$\\\ |\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}\\\ | = \\\sqrt{3^2 + 4^2} = \\\sqrt{9 + 16} = \\\sqrt{25} = 5$',
    difficulty: 'easy',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    source: 'Poole 5.1: 5'
  },
  {
    id: 'prob-20',
    question: 'Are $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix}$ and $\\\begin{bmatrix} 0 \\\ 1 \\\\\end{bmatrix}$ orthogonal?',
    type: 'multiple-choice',
    options: ['Yes', 'No', 'Only if scaled', 'Cannot determine'],
    correctAnswer: 'Yes',
    explanation: 'Their dot product is $1\\cdot0 + 0\\cdot1 = 0$, so they are orthogonal.',
    difficulty: 'easy',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    source: 'Poole 5.1: 15'
  },
  {
    id: 'prob-21',
    question: 'What is the projection of $\\\begin{bmatrix} 3 \\\ 4 \\\\\end{bmatrix}$ onto $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\end{bmatrix}$?',
    type: 'calculation',
    correctAnswer: '$\\\begin{bmatrix} 3 \\\\\ 0 \\\\\end{bmatrix}$',
    explanation: '$\\operatorname{proj}_{\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}}(\\begin{bmatrix} 3 \\\\\ 4 \\end{bmatrix}) = \\frac{\\begin{bmatrix} 3 \\\\\ 4 \\end{bmatrix}\\cdot\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}}{\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}\\cdot\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix}}\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix} = \\frac{3}{1}\\begin{bmatrix} 1 \\\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\\ 0 \\end{bmatrix}$',
    difficulty: 'medium',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    source: 'Poole 5.2: 1'
  },
  {
    id: 'prob-22',
    question: 'If $W = \\\ operatorname{span}\\\ {\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}\\\ }$, what is a basis for $W^\\\ perp$?',
    type: 'multiple-choice',
    options: [
      '$\\\ {\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}, \\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}\\\ }$',
      '$\\\ {\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}\\\ }$',
      '$\\\ {\\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}\\\ }$',
      '$\\\ {\\begin{bmatrix} 1 \\\ 1 \\\ 1 \\\\\end{bmatrix}\\\ }$'
    ],
    correctAnswer: '$\\\ {\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}, \\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}\\\ }$',
    explanation: 'Vectors orthogonal to $\\\begin{bmatrix} 1 \\\\\ 0 \\\\\ 0 \\\\\end{bmatrix}$ have first component 0, so they are of form $\\\begin{bmatrix} 0 \\\\\\\\a \\\\\\\\b \\\\\end{bmatrix}$. A basis is $\\\ {\\begin{bmatrix} 0 \\\ 1 \\\\\ 0 \\\\\end{bmatrix}, \\begin{bmatrix} 0 \\\\\ 0 \\\ 1 \\\\\end{bmatrix}\\\ }$.',
    difficulty: 'medium',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.3',
    source: 'Poole 5.3: 1'
  },
  {
    id: 'prob-23',
    question: 'To find the least squares solution to $A\\\\mathbf{x} = \\\\mathbf{b}$, you solve which equation?',
    type: 'multiple-choice',
    options: [
      '$A\\\\mathbf{x} = \\\\mathbf{b}$',
      '$A^\top A\\\ hat{\\\\mathbf{x}} = A^\top \\\\mathbf{b}$',
      '$AA^\top \\\ hat{\\\\mathbf{x}} = \\\\mathbf{b}$',
      '$\\\ hat{\\\\mathbf{x}} = A^{-1}\\\\mathbf{b}$'
    ],
    correctAnswer: '$A^\top A\\\ hat{\\\\mathbf{x}} = A^\top \\\\mathbf{b}$',
    explanation: 'The normal equations $A^\top A\\\ hat{\\\\mathbf{x}} = A^\top \\\\mathbf{b}$ give the least squares solution $\\\ hat{\\\\mathbf{x}}$.',
    difficulty: 'medium',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    source: 'Poole 7.3: 1'
  },
  {
    id: 'prob-24',
    question: 'If the least squares solution is $\\\ hat{\\\\mathbf{x}} = \\begin{bmatrix} 2 \\\ 3 \\\\\end{bmatrix}$ and $A = \\begin{bmatrix} 1 & 0 \\\\\ 0 & 1 \\\\\end{bmatrix}$, what is the projection of $\\\\mathbf{b}$ onto $\\\ operatorname{col}(A)$?',
    type: 'multiple-choice',
    options: [
      '$\\\begin{bmatrix} 2 \\\ 3 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 3 \\\ 2 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 0 \\\\\ 0 \\\\\end{bmatrix}$',
      '$\\\begin{bmatrix} 1 \\\ 1 \\\\\end{bmatrix}$'
    ],
    correctAnswer: '$\\\begin{bmatrix} 2 \\\ 3 \\\\\end{bmatrix}$',
    explanation: 'The projection is $A\\\ hat{\\\\mathbf{x}} = \\begin{bmatrix} 1 & 0 \\\\\ 0 & 1 \\\\\end{bmatrix}\\begin{bmatrix} 2 \\\ 3 \\\\\end{bmatrix} = \\begin{bmatrix} 2 \\\ 3 \\\\\end{bmatrix}$.',
    difficulty: 'medium',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    source: 'Poole 7.3: 5'
  }
];

// FLASHCARDS - Key Concepts and Definitions
export const flashcards: Flashcard[] = [
  // Midterm 1
  {
    id: 'fc-1',
    front: 'What is a linear combination?',
    back: 'A linear combination of vectors v₁, ..., vₙ is an expression of the form c₁v₁ + c₂v₂ + ... + cₙvₙ where c₁, ..., cₙ are scalars.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    mastered: false
  },
  {
    id: 'fc-2',
    front: 'Define linear independence.',
    back: 'Vectors v₁, ..., vₙ are linearly independent if c₁v₁ + ... + cₙvₙ = 0 implies c₁ = ... = cₙ = 0. Otherwise, they are linearly dependent.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.3',
    mastered: false
  },
  {
    id: 'fc-3',
    front: 'What is the span of a set of vectors?',
    back: 'The span of {v₁, ..., vₙ} is the set of all linear combinations of these vectors. It is a subspace.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '1.1',
    mastered: false
  },
  {
    id: 'fc-4',
    front: 'What is the rank of a matrix?',
    back: 'The rank of a matrix is the number of pivot positions in its echelon form. It equals the dimension of the column space and row space.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.2',
    mastered: false
  },
  {
    id: 'fc-5',
    front: 'What is a homogeneous system?',
    back: 'A homogeneous system has the form Ax = 0. It always has at least the trivial solution x = 0.',
    category: 'Midterm 1 (Ch 1, 2, 3)',
    section: '2.1',
    mastered: false
  },
  // Midterm 2
  {
    id: 'fc-6',
    front: 'What does it mean for a matrix to be invertible?',
    back: 'A matrix A is invertible if there exists a matrix A^{-1} such that AA^{-1} = A^{-1}A = I. Only square matrices can be invertible.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.3',
    mastered: false
  },
  {
    id: 'fc-7',
    front: 'What is a basis?',
    back: 'A basis of a subspace is a set of vectors that (1) spans the subspace and (2) is linearly independent.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    mastered: false
  },
  {
    id: 'fc-8',
    front: 'What is the dimension of a subspace?',
    back: 'The dimension is the number of vectors in any basis of that subspace. All bases of a subspace have the same size.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    mastered: false
  },
  {
    id: 'fc-9',
    front: 'What is the null space of a matrix?',
    back: 'The null space N(A) is the set of all vectors x such that Ax = 0. It is a subspace.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    mastered: false
  },
  {
    id: 'fc-10',
    front: 'What is the column space of a matrix?',
    back: 'The column space col(A) is the span of the columns of A. It is a subspace of R^m for an m×n matrix.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    mastered: false
  },
  {
    id: 'fc-11',
    front: 'What is the nullity of a matrix?',
    back: 'The nullity is the dimension of the null space N(A). By Rank-Nullity: rank(A) + nullity(A) = n (number of columns).',
    category: 'Midterm 2 (Ch 3)',
    section: '3.5',
    mastered: false
  },
  {
    id: 'fc-12',
    front: 'What is a linear transformation?',
    back: 'A function T: R^n → R^m is linear if T(u+v) = T(u) + T(v) and T(cu) = cT(u) for all vectors u, v and scalars c.',
    category: 'Midterm 2 (Ch 3)',
    section: '3.6',
    mastered: false
  },
  // Midterm 3
  {
    id: 'fc-13',
    front: 'What is an eigenvalue?',
    back: 'A scalar λ is an eigenvalue of A if there exists a non-zero vector v such that Av = λv. The vector v is an eigenvector.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    mastered: false
  },
  {
    id: 'fc-14',
    front: 'What is an eigenvector?',
    back: 'An eigenvector v of A corresponding to eigenvalue λ is a non-zero vector satisfying Av = λv. Eigenvectors are not unique (any scalar multiple works).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    mastered: false
  },
  {
    id: 'fc-15',
    front: 'What is the characteristic equation?',
    back: 'The characteristic equation det(A - λI) = 0 is used to find eigenvalues. Solutions to this equation are the eigenvalues.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    mastered: false
  },
  {
    id: 'fc-16',
    front: 'What is an eigenspace?',
    back: 'The eigenspace E_λ for eigenvalue λ is the set of all eigenvectors corresponding to λ, plus the zero vector. It is N(A - λI).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.1',
    mastered: false
  },
  {
    id: 'fc-17',
    front: 'What is the determinant of a matrix?',
    back: 'The determinant is a scalar value that can be computed from the elements of a square matrix. det(A) = 0 iff A is not invertible.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.2',
    mastered: false
  },
  {
    id: 'fc-18',
    front: 'What is algebraic multiplicity?',
    back: 'The algebraic multiplicity of an eigenvalue λ is its multiplicity as a root of the characteristic polynomial.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.3',
    mastered: false
  },
  {
    id: 'fc-19',
    front: 'What is geometric multiplicity?',
    back: 'The geometric multiplicity of λ is the dimension of the eigenspace E_λ (the null space of A - λI).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.3',
    mastered: false
  },
  {
    id: 'fc-20',
    front: 'When is a matrix diagonalizable?',
    back: 'A matrix is diagonalizable iff it has n linearly independent eigenvectors (equivalently: geometric multiplicity = algebraic multiplicity for all eigenvalues).',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    mastered: false
  },
  {
    id: 'fc-21',
    front: 'What does it mean for matrices to be similar?',
    back: 'A and B are similar if B = P^{-1}AP for some invertible P. Similar matrices have the same eigenvalues, determinant, trace, and rank.',
    category: 'Midterm 3 (Ch 4, Appendix C)',
    section: '4.4',
    mastered: false
  },
  // Part 2
  {
    id: 'fc-22',
    front: 'What is the dot product of two vectors?',
    back: 'The dot product u \\cdot v = u₁v₁ + u₂v₂ + ... + uₙvₙ. It equals ||u|| ||v|| cos(θ) where θ is the angle between them.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    mastered: false
  },
  {
    id: 'fc-23',
    front: 'What does it mean for vectors to be orthogonal?',
    back: 'Vectors u and v are orthogonal if their dot product is zero: u \\cdot v = 0. This means they are perpendicular (or one is the zero vector).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    mastered: false
  },
  {
    id: 'fc-24',
    front: 'What is a unit vector?',
    back: 'A unit vector is a vector with length 1. Any non-zero vector v can be normalized to a unit vector u = v/||v||.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    mastered: false
  },
  {
    id: 'fc-25',
    front: 'What is an orthonormal basis?',
    back: 'An orthonormal basis is a basis where all vectors are unit vectors and are pairwise orthogonal (orthogonal + normalized).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.1',
    mastered: false
  },
  {
    id: 'fc-26',
    front: 'What is the Gram-Schmidt process?',
    back: 'Gram-Schmidt is an algorithm that takes a basis and produces an orthogonal (or orthonormal) basis for the same subspace.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.2',
    mastered: false
  },
  {
    id: 'fc-27',
    front: 'What is the orthogonal complement W^⊥?',
    back: 'The orthogonal complement of a subspace W is the set of all vectors orthogonal to every vector in W. dim(W) + dim(W^⊥) = n.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '5.3',
    mastered: false
  },
  {
    id: 'fc-28',
    front: 'What is a least squares solution?',
    back: 'A least squares solution x̂ to Ax = b minimizes ||Ax - b||. It is used when the system has no exact solution (overdetermined).',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    mastered: false
  },
  {
    id: 'fc-29',
    front: 'What are the normal equations?',
    back: 'The normal equations A^TAx̂ = A^Tb give the least squares solution x̂ to Ax = b.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    mastered: false
  },
  {
    id: 'fc-30',
    front: 'What is the least squares error?',
    back: 'The least squares error is ||b - Ax̂||, the distance from b to the column space of A. It measures how well Ax̂ approximates b.',
    category: 'Part 2 (Ch 5, 7.3)',
    section: '7.3',
    mastered: false
  }
];
