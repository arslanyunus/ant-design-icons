// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1BulkSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1Bulk: SliderVertical1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1BulkSvg}></AntdIcon>;
};

SliderVertical1Bulk.displayName = 'SliderVertical1Bulk';
SliderVertical1Bulk.inheritAttrs = false;
export default SliderVertical1Bulk;