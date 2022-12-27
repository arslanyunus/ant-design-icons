// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareLinearSvg from '@ant-design/icons-svg/lib/asn/NoteSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareLinear: NoteSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareLinearSvg}></AntdIcon>;
};

NoteSquareLinear.displayName = 'NoteSquareLinear';
NoteSquareLinear.inheritAttrs = false;
export default NoteSquareLinear;