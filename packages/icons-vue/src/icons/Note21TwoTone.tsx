// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note21TwoToneSvg from '@ant-design/icons-svg/lib/asn/Note21TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note21TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note21TwoTone: Note21TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note21TwoToneSvg}></AntdIcon>;
};

Note21TwoTone.displayName = 'Note21TwoTone';
Note21TwoTone.inheritAttrs = false;
export default Note21TwoTone;