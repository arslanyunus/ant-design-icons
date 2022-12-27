// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Bookmark2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2TwoTone: Bookmark2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2TwoToneSvg}></AntdIcon>;
};

Bookmark2TwoTone.displayName = 'Bookmark2TwoTone';
Bookmark2TwoTone.inheritAttrs = false;
export default Bookmark2TwoTone;