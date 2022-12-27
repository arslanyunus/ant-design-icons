// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Folder2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2TwoTone: Folder2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2TwoToneSvg}></AntdIcon>;
};

Folder2TwoTone.displayName = 'Folder2TwoTone';
Folder2TwoTone.inheritAttrs = false;
export default Folder2TwoTone;