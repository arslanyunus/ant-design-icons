// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveBold: NoteRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveBoldSvg}></AntdIcon>;
};

NoteRemoveBold.displayName = 'NoteRemoveBold';
NoteRemoveBold.inheritAttrs = false;
export default NoteRemoveBold;