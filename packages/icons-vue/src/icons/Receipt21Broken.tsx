// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21BrokenSvg from '@ant-design/icons-svg/lib/asn/Receipt21Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21Broken: Receipt21BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21BrokenSvg}></AntdIcon>;
};

Receipt21Broken.displayName = 'Receipt21Broken';
Receipt21Broken.inheritAttrs = false;
export default Receipt21Broken;