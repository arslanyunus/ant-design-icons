// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddLinearSvg from '@ant-design/icons-svg/lib/asn/NoteAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddLinear: NoteAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddLinearSvg}></AntdIcon>;
};

NoteAddLinear.displayName = 'NoteAddLinear';
NoteAddLinear.inheritAttrs = false;
export default NoteAddLinear;