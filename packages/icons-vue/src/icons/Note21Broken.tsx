// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note21BrokenSvg from '@ant-design/icons-svg/lib/asn/Note21Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note21BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note21Broken: Note21BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note21BrokenSvg}></AntdIcon>;
};

Note21Broken.displayName = 'Note21Broken';
Note21Broken.inheritAttrs = false;
export default Note21Broken;