// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2BrokenSvg from '@ant-design/icons-svg/lib/asn/Buildings2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2Broken: Buildings2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2BrokenSvg}></AntdIcon>;
};

Buildings2Broken.displayName = 'Buildings2Broken';
Buildings2Broken.inheritAttrs = false;
export default Buildings2Broken;