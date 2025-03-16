

export default function Section({id, classname, children}) {
  return (
    <section id={id} className={classname}>
      {children}
    </section>
  )
}
