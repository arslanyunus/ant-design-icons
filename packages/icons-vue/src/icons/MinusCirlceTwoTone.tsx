// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceTwoTone: MinusCirlceTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceTwoToneSvg}></AntdIcon>;
};

MinusCirlceTwoTone.displayName = 'MinusCirlceTwoTone';
MinusCirlceTwoTone.inheritAttrs = false;
export default MinusCirlceTwoTone;