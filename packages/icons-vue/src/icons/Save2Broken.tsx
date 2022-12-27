// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2BrokenSvg from '@ant-design/icons-svg/lib/asn/Save2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2Broken: Save2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2BrokenSvg}></AntdIcon>;
};

Save2Broken.displayName = 'Save2Broken';
Save2Broken.inheritAttrs = false;
export default Save2Broken;