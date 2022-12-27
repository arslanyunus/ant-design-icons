// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1BrokenSvg from '@ant-design/icons-svg/lib/asn/Note1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1Broken: Note1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1BrokenSvg}></AntdIcon>;
};

Note1Broken.displayName = 'Note1Broken';
Note1Broken.inheritAttrs = false;
export default Note1Broken;