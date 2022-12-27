// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveOutline: NoteRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveOutlineSvg}></AntdIcon>;
};

NoteRemoveOutline.displayName = 'NoteRemoveOutline';
NoteRemoveOutline.inheritAttrs = false;
export default NoteRemoveOutline;