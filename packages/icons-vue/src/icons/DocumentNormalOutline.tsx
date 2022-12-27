// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentNormalOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentNormalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentNormalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentNormalOutline: DocumentNormalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentNormalOutlineSvg}></AntdIcon>;
};

DocumentNormalOutline.displayName = 'DocumentNormalOutline';
DocumentNormalOutline.inheritAttrs = false;
export default DocumentNormalOutline;