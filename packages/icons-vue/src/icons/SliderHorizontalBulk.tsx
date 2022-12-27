// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalBulkSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalBulk: SliderHorizontalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalBulkSvg}></AntdIcon>;
};

SliderHorizontalBulk.displayName = 'SliderHorizontalBulk';
SliderHorizontalBulk.inheritAttrs = false;
export default SliderHorizontalBulk;