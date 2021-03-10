import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Form in react",
  link: "https://github.com/rocketseact/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}