// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note21LinearSvg from '@ant-design/icons-svg/lib/asn/Note21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note21Linear: Note21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note21LinearSvg}></AntdIcon>;
};

Note21Linear.displayName = 'Note21Linear';
Note21Linear.inheritAttrs = false;
export default Note21Linear;