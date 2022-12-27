// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderBulkSvg from '@ant-design/icons-svg/lib/asn/SliderBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderBulk: SliderBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderBulkSvg}></AntdIcon>;
};

SliderBulk.displayName = 'SliderBulk';
SliderBulk.inheritAttrs = false;
export default SliderBulk;