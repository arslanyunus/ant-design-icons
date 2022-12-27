// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareOutline: NoteSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareOutlineSvg}></AntdIcon>;
};

NoteSquareOutline.displayName = 'NoteSquareOutline';
NoteSquareOutline.inheritAttrs = false;
export default NoteSquareOutline;