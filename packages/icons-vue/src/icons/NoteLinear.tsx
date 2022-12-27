// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteLinearSvg from '@ant-design/icons-svg/lib/asn/NoteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteLinear: NoteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteLinearSvg}></AntdIcon>;
};

NoteLinear.displayName = 'NoteLinear';
NoteLinear.inheritAttrs = false;
export default NoteLinear;