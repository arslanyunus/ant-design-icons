// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CoffeeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeTwoTone: CoffeeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeTwoToneSvg}></AntdIcon>;
};

CoffeeTwoTone.displayName = 'CoffeeTwoTone';
CoffeeTwoTone.inheritAttrs = false;
export default CoffeeTwoTone;