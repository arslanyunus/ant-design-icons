// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward15SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Forward15SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward15SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward15SecondsBold: Forward15SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward15SecondsBoldSvg}></AntdIcon>;
};

Forward15SecondsBold.displayName = 'Forward15SecondsBold';
Forward15SecondsBold.inheritAttrs = false;
export default Forward15SecondsBold;