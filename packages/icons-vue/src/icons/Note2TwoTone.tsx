// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Note2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2TwoTone: Note2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2TwoToneSvg}></AntdIcon>;
};

Note2TwoTone.displayName = 'Note2TwoTone';
Note2TwoTone.inheritAttrs = false;
export default Note2TwoTone;