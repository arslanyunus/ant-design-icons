// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTextOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteTextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTextOutline: NoteTextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTextOutlineSvg}></AntdIcon>;
};

NoteTextOutline.displayName = 'NoteTextOutline';
NoteTextOutline.inheritAttrs = false;
export default NoteTextOutline;