// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsOutlineSvg from '@ant-design/icons-svg/lib/asn/BuildingsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsOutline: BuildingsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsOutlineSvg}></AntdIcon>;
};

BuildingsOutline.displayName = 'BuildingsOutline';
BuildingsOutline.inheritAttrs = false;
export default BuildingsOutline;