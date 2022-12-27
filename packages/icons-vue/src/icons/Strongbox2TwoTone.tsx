// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Strongbox2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2TwoTone: Strongbox2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2TwoToneSvg}></AntdIcon>;
};

Strongbox2TwoTone.displayName = 'Strongbox2TwoTone';
Strongbox2TwoTone.inheritAttrs = false;
export default Strongbox2TwoTone;