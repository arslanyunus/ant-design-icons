// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeTwoToneSvg from '@ant-design/icons-svg/lib/asn/TradeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeTwoTone: TradeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeTwoToneSvg}></AntdIcon>;
};

TradeTwoTone.displayName = 'TradeTwoTone';
TradeTwoTone.inheritAttrs = false;
export default TradeTwoTone;