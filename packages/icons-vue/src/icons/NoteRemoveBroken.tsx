// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveBroken: NoteRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveBrokenSvg}></AntdIcon>;
};

NoteRemoveBroken.displayName = 'NoteRemoveBroken';
NoteRemoveBroken.inheritAttrs = false;
export default NoteRemoveBroken;