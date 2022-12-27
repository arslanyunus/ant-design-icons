// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2LinearSvg from '@ant-design/icons-svg/lib/asn/Note2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2Linear: Note2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2LinearSvg}></AntdIcon>;
};

Note2Linear.displayName = 'Note2Linear';
Note2Linear.inheritAttrs = false;
export default Note2Linear;