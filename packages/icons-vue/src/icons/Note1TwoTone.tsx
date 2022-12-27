// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Note1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1TwoTone: Note1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1TwoToneSvg}></AntdIcon>;
};

Note1TwoTone.displayName = 'Note1TwoTone';
Note1TwoTone.inheritAttrs = false;
export default Note1TwoTone;