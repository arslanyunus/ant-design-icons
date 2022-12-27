// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2BrokenSvg from '@ant-design/icons-svg/lib/asn/Note2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2Broken: Note2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2BrokenSvg}></AntdIcon>;
};

Note2Broken.displayName = 'Note2Broken';
Note2Broken.inheritAttrs = false;
export default Note2Broken;