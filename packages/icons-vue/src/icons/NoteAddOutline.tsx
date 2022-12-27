// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddOutline: NoteAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddOutlineSvg}></AntdIcon>;
};

NoteAddOutline.displayName = 'NoteAddOutline';
NoteAddOutline.inheritAttrs = false;
export default NoteAddOutline;