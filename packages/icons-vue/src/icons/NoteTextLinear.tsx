// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTextLinearSvg from '@ant-design/icons-svg/lib/asn/NoteTextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTextLinear: NoteTextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTextLinearSvg}></AntdIcon>;
};

NoteTextLinear.displayName = 'NoteTextLinear';
NoteTextLinear.inheritAttrs = false;
export default NoteTextLinear;