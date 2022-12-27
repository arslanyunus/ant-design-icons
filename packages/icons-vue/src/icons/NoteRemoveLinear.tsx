// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveLinear: NoteRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveLinearSvg}></AntdIcon>;
};

NoteRemoveLinear.displayName = 'NoteRemoveLinear';
NoteRemoveLinear.inheritAttrs = false;
export default NoteRemoveLinear;