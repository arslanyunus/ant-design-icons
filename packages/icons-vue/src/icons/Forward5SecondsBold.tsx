// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsBold: Forward5SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsBoldSvg}></AntdIcon>;
};

Forward5SecondsBold.displayName = 'Forward5SecondsBold';
Forward5SecondsBold.inheritAttrs = false;
export default Forward5SecondsBold;