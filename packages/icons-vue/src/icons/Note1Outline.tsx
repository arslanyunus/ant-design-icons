// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1OutlineSvg from '@ant-design/icons-svg/lib/asn/Note1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1Outline: Note1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1OutlineSvg}></AntdIcon>;
};

Note1Outline.displayName = 'Note1Outline';
Note1Outline.inheritAttrs = false;
export default Note1Outline;