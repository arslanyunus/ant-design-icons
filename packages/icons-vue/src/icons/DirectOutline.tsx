// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectOutline: DirectOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectOutlineSvg}></AntdIcon>;
};

DirectOutline.displayName = 'DirectOutline';
DirectOutline.inheritAttrs = false;
export default DirectOutline;