// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusTwoTone: MinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusTwoToneSvg}></AntdIcon>;
};

MinusTwoTone.displayName = 'MinusTwoTone';
MinusTwoTone.inheritAttrs = false;
export default MinusTwoTone;