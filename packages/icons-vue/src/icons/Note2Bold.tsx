// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2BoldSvg from '@ant-design/icons-svg/lib/asn/Note2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2Bold: Note2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2BoldSvg}></AntdIcon>;
};

Note2Bold.displayName = 'Note2Bold';
Note2Bold.inheritAttrs = false;
export default Note2Bold;