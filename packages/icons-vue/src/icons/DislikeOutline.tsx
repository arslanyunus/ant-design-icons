// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeOutlineSvg from '@ant-design/icons-svg/lib/asn/DislikeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeOutline: DislikeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeOutlineSvg}></AntdIcon>;
};

DislikeOutline.displayName = 'DislikeOutline';
DislikeOutline.inheritAttrs = false;
export default DislikeOutline;