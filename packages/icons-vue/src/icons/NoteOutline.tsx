// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteOutline: NoteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteOutlineSvg}></AntdIcon>;
};

NoteOutline.displayName = 'NoteOutline';
NoteOutline.inheritAttrs = false;
export default NoteOutline;