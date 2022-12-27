// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note21OutlineSvg from '@ant-design/icons-svg/lib/asn/Note21Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note21OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note21Outline: Note21OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note21OutlineSvg}></AntdIcon>;
};

Note21Outline.displayName = 'Note21Outline';
Note21Outline.inheritAttrs = false;
export default Note21Outline;