// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24BrokenSvg from '@ant-design/icons-svg/lib/asn/Support24Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24Broken: Support24BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24BrokenSvg}></AntdIcon>;
};

Support24Broken.displayName = 'Support24Broken';
Support24Broken.inheritAttrs = false;
export default Support24Broken;