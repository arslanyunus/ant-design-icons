// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2OutlineSvg from '@ant-design/icons-svg/lib/asn/Note2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2Outline: Note2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2OutlineSvg}></AntdIcon>;
};

Note2Outline.displayName = 'Note2Outline';
Note2Outline.inheritAttrs = false;
export default Note2Outline;