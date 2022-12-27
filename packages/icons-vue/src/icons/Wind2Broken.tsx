// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2BrokenSvg from '@ant-design/icons-svg/lib/asn/Wind2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2Broken: Wind2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2BrokenSvg}></AntdIcon>;
};

Wind2Broken.displayName = 'Wind2Broken';
Wind2Broken.inheritAttrs = false;
export default Wind2Broken;