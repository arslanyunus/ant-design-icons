// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallcapsBoldSvg from '@ant-design/icons-svg/lib/asn/SmallcapsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallcapsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallcapsBold: SmallcapsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallcapsBoldSvg}></AntdIcon>;
};

SmallcapsBold.displayName = 'SmallcapsBold';
SmallcapsBold.inheritAttrs = false;
export default SmallcapsBold;