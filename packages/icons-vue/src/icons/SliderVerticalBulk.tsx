// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalBulkSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalBulk: SliderVerticalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalBulkSvg}></AntdIcon>;
};

SliderVerticalBulk.displayName = 'SliderVerticalBulk';
SliderVerticalBulk.inheritAttrs = false;
export default SliderVerticalBulk;